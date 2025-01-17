import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given( 'the screen is {int}x{int}', cy.viewport )

Given( 'the device is {string}', cy.viewport )
