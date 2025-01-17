import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then( '{string}が見えるはずです', cy.stringExist )
Then( '{string}は表示されません', cy.stringNotExist )
