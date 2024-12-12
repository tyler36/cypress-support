import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given( '画面は{int}x{int}です', cy.viewport )

Given( 'デバイスは{string}です', cy.viewport )
