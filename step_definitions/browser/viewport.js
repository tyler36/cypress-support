import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given( 'the screen is {int}x{int}', cy.viewport )
Given( '画面は{int}x{int}です', cy.viewport )

Given( 'the device is {string}', cy.viewport )
Given( 'デバイスは{string}です', cy.viewport )
