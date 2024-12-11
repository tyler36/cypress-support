import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then( 'I should be on {string}', cy.pathEqual )
Then( 'the path should be {string}', cy.pathEqual )
Then( '{string}にいるはずです', cy.pathEqual )
Then( 'I should not be on {string}', cy.pathNotEqual )
Then( 'the path should not be {string}', cy.pathNotEqual )
Then( '{string}に乗ってはいけません', cy.pathNotEqual )
Then( 'the path should include {string}', cy.pathIncludes )
Then( 'the path should not include {string}', cy.pathNotIncludes )

Then( 'I request {string}, I expect a {string} status code', cy.expectStatus )
