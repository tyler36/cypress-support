import { When } from '@badeball/cypress-cucumber-preprocessor'

/**
 * NOTE: During testing, "feature" tests required a `wait` statement before detecting changes.
 */
When( 'I scroll {string} px', cy.scrollDistance )
When( 'I scroll to the {string} of {string}', cy.scrollToSelectorPosition )
