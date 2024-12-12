import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given( 'I visit {string}', cy.visit )

Given( 'disable fixed header', cy.disableHeader )
