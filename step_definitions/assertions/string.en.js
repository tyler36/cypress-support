import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then( 'I should see {string}', cy.stringExist )
Then( 'I should not see {string}', cy.stringNotExist )
