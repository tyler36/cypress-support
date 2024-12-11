import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

When( 'I wait {string}', ms => cy.wait( parseInt( ms ) ) )
When( '{string}待つ', ms => cy.wait( parseInt( ms ) ) )

Then( 'wait {string} ms', ms => cy.wait( parseInt( ms ) ) )
