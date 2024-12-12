import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

When( '{string}待つ', ms => cy.wait( parseInt( ms ) ) )

Then( '待機{string}ミリ秒', ms => cy.wait( parseInt( ms ) ) )
