# Cypress Support <!-- omit in toc -->

- [Overview](#overview)
- [Install](#install)

## Overview

This repository contains helper commands for use with Cypress.

## Install

1. Require the package via GitHub

    ```shell
    npm install https://github.com/tyler36/cypress-support
    ```

2. Import commands in to Cypress's `e2e.js` file. Default location: `cypress/support/e2e.js`

    ```js
    import '../../node_modules/cypress-support/commands'
    ```

3. Add/update `cypress/fixtures/selector.json` to include an "error" selector.

    ```json
    {
        "error": ".error"
    }
    ```
