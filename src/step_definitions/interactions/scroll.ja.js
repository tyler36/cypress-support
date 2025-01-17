import { When } from '@badeball/cypress-cucumber-preprocessor'

/**
 * NOTE: During testing, "feature" tests required a `wait` statement before detecting changes.
 */
When( '{string}ピクセルスクロールします', cy.scrollDistance )
When( '{string}の{string}までスクロールします', ( selector, position ) => cy.scrollToSelectorPosition( position, selector ) )
