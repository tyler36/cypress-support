/**
 * Scroll to position within selector
 * @param {string} position     relative position to scroll to
 * @param {string} selector     CSS selector
 */
const scrollToSelectorPosition = ( position = 'center', selector ) => {
    cy.get( selector ).scrollTo( position )
}

/**
 * Scroll vertically a set amount
 * @param {string} pixels   Number of 'pixels' to scroll
 */
const scrollDistance = pixels => cy.scrollTo( 0, parseInt( pixels ) )

Cypress.Commands.add( 'scrollToSelectorPosition', scrollToSelectorPosition )
Cypress.Commands.add( 'scrollDistance', scrollDistance )
