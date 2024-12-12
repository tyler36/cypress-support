import { When } from '@badeball/cypress-cucumber-preprocessor'

When( '{string}をクリックします', cy.clickSelector )

When( 'テキスト{string}をクリックします', cy.clickText )
When( '{string}のテキスト{string}をクリックします', ( selector, text ) => cy.clickTextIn( text, selector ) )

