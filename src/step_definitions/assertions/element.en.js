import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then( 'I should see a {string} selector', cy.selectorExist )
Then( 'I should not see a {string} selector', cy.selectorNotExist )

Then( 'I should see {string} in {string}', ( string, selector ) => cy.selectorContainsString( selector, string ) )
Then(
    'I should not see {string} in {string}',
    ( string, selector ) => cy.selectorNotContainsString( selector, string )
)

Then( '{string} should have {string} value', cy.selectorContainsValue )
Then( '{string} should not have {string} value', cy.selectorNotContainsValue )

Then( 'the {string} selector should be visible', cy.selectorVisible )
Then( 'the {string} selector should be hidden', cy.selectorHidden )

Then( 'I should see a link to {string}', cy.linkExist )
Then( 'I should not see a link to {string}', cy.linkNotExist )

Then( 'the title should contain {string}', cy.titleContains )

Then( 'the description should be {string}', cy.metaDescription )
Then( 'the {string} metaProp should be {string}', cy.metaProp )
Then( 'the {string} metaName should be {string}', cy.metaName )

Then( 'I should see a script with src={string}', cy.scriptExist )

Then( 'the {string} selector should have CSS {string} set to {string}', cy.cssSelectorSet )
Then( 'the {string} selector should not have CSS {string} set to {string}', cy.cssSelectorNotSet )

Then( '{string} should be checked', cy.selectorIsChecked )
Then( '{string} should not be checked', cy.selectorIsNotChecked )
Then( 'I should not see errors', cy.notSeeErrors )
