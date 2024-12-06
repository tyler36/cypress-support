setup() {
  set -eu -o pipefail
  export DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )/.."
  export PROJNAME=test-cypress
  export TESTDIR=~/tmp/test-cypress-support
  mkdir -p $TESTDIR
  export DDEV_NON_INTERACTIVE=true
  ddev delete -Oy ${PROJNAME} >/dev/null 2>&1 || true
  cd "${TESTDIR}"
  mkdir -p "public"
  cp -r "${DIR}/tests/testdata/"* "${TESTDIR}"
  ddev config --project-name=${PROJNAME} --docroot=public
}

health_checks() {
  # ddev cypress-run --version | grep "Cypress package version"
  ddev cypress-run | grep "All specs passed"
}

teardown() {
  set -eu -o pipefail
  cd ${TESTDIR} || ( printf "unable to cd to ${TESTDIR}\n" && exit 1 )
  # ddev delete -Oy ${PROJNAME} >/dev/null 2>&1
  # [ "${TESTDIR}" != "" ] && rm -rf ${TESTDIR}
}

@test "installs from " {
  set -eu -o pipefail
  cd ${TESTDIR}
  echo "# ddev add-on get ${DIR} with project ${PROJNAME} in ${TESTDIR} ($(pwd))" >&3
  ddev add-on get tyler36/ddev-cypress
  ddev restart >/dev/null

  # Install support file
  npm install git+https://github.com/tyler36/cypress-support\#prep-for-release
  health_checks
}
