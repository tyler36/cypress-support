import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then( 'パスは{string}に等しくなければなりません', cy.pathEqual )
Then( 'パスは{string}に等しくてはいけません', cy.pathNotEqual )
Then( 'パスには{string}を含める必要があります', cy.pathIncludes )
Then( 'パスは{string}と等しくてはいけません', cy.pathNotIncludes )

Then( '{string}をリクエストすると、{string}ステータス コードが返されるはずです', cy.expectStatus )
