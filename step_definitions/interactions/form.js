import { When } from '@badeball/cypress-cucumber-preprocessor'

When( 'I type {string} into {string}', cy.typeStringInto )
When( '{string}に{string}と入力します', ( name, query ) => cy.typeStringInto( query, name ) )

When( 'I submit the form', cy.submit )
When( 'フォームを送信します', cy.submit )
