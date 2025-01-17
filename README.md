# Cypress Support <!-- omit in toc -->

- [Overview](#overview)
- [Install](#install)
  - [Support Commands](#support-commands)
  - [Step Definitions](#step-definitions)

## Overview

This repository contains helper commands for use with Cypress.

## Install

1. Require the package via GitHub

    ```shell
    npm install https://github.com/tyler36/cypress-support
    ```

### Support Commands

1. Import commands in to Cypress's `e2e.js` file. Default location: `cypress/support/e2e.js`

    ```js
    import 'cypress-support/src/commands/commands'
    ```

1. Add/update `cypress/fixtures/selector.json` to include an "error" selector.

    ```json
    {
        "error": ".error"
    }
    ```

### Step Definitions

1. Add a `.cypress-cucumber-preprocessorrc.json` and update it to point to all step definitions:

    ```json
        {
        "stepDefinitions": [
            "cypress/support/step_definitions/**/*.{js,ts}",
            "node_modules/cypress-support/src/step_definitions/**/*.{js,ts}"
        ]
    }
    ```
