import { When } from '@badeball/cypress-cucumber-preprocessor'

When( 'I click {string}', cy.clickSelector )

When( 'I click the text {string}', cy.clickText )
When( 'I click the text {string} in {string}', cy.clickTextIn )

