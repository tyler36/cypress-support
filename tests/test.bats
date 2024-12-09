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
  ddev cypress-run | grep "All specs passed"
}

teardown() {
  set -eu -o pipefail

  # Remove the tarball, if it exists
  cd ${DIR}
  rm ${PACKAGE_TGZ} >/dev/null 2>&1

  cd ${TESTDIR} || ( printf "unable to cd to ${TESTDIR}\n" && exit 1 )
  ddev delete -Oy ${PROJNAME} >/dev/null 2>&1
  [ "${TESTDIR}" != "" ] && rm -rf ${TESTDIR}
}

@test "installs from local copy" {
  set -eu -o pipefail

  # Create a tarball to later install.
  cd "${DIR}"
  PACKAGE_TGZ=$(npm pack)
  cd ${TESTDIR}

  echo "# Install local ${DIR} into ${TESTDIR} ($(pwd))" >&3
  npm install "${DIR}/${PACKAGE_TGZ}"

  ddev add-on get tyler36/ddev-cypress
  ddev restart >/dev/null

  health_checks
}

@test "installs from release" {
  set -eu -o pipefail

  cd ${TESTDIR}

  echo "# Install from release into ${TESTDIR} ($(pwd))" >&3
  npm install git+https://github.com/tyler36/cypress-support/#main

  ddev add-on get tyler36/ddev-cypress
  ddev restart >/dev/null

  health_checks
}
