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
  cp -r "${DIR}/tests/testdata/." "${TESTDIR}"
  ddev config --project-name=${PROJNAME} --docroot=public
}

health_checks() {
  ddev cypress-run | grep "All specs passed"
}

teardown() {
  set -eu -o pipefail

  # Remove the tarball, if it exists
  cd ${DIR}
  if [ -f "$PACKAGE_TGZ" ];then
    rm ${PACKAGE_TGZ} >/dev/null 2>&1
  fi

  cd ${TESTDIR} || ( printf "unable to cd to ${TESTDIR}\n" && exit 1 )
  ddev delete -Oy ${PROJNAME} >/dev/null 2>&1
  [ "${TESTDIR}" != "" ] && rm -rf ${TESTDIR}
}

@test "runs commands in local environment" {
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

@test "step definitions function" {
  set -eu -o pipefail

  # Create a tarball to later install.
  cd "${DIR}"
  PACKAGE_TGZ=$(npm pack)
  cd ${TESTDIR}

  # # Install Cucumber
  npm install @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor --save-dev
  # Update configuration for Cucumber.
  mv cypress.config.js cypress.config.js.old
  mv cucumber.config.ts cypress.config.ts
  # Remove `type: module` from `package.json`
  sed -i '/"module"/d' package.json

  # echo "# Install ${DIR} into ${TESTDIR} ($(pwd))" >&3
  npm install "${DIR}/${PACKAGE_TGZ}"

  # Install Cypress ad0d-on
  ddev add-on get tyler36/ddev-cypress
  ddev restart >/dev/null

  health_checks
}
