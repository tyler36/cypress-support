import { When } from '@badeball/cypress-cucumber-preprocessor'

When( 'I type {string} into {string}', cy.typeStringInto )

When( 'I check {string}', name => cy.checkSelector( `[name="${name}"]` ) )
When( 'I select {string} in {string}', cy.selectOption )

When( 'I submit the form', cy.submit )
