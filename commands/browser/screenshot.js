/**
 * Assert "selector" element matches image screenshot
 * @param {string} selector
 */
const matchElement = selector => cy.get( selector ).matchImageSnapshot()

/**
 * Assert "selector" element matches "named" image screenshot
 * @param {string} selector
 */
const matchElementNamed = ( selector, name ) => cy.get( selector ).matchImageSnapshot( name )

/**
 * Assert page matches screenshot
 */
const matchPage = () => cy.matchImageSnapshot()


Cypress.Commands.add( 'matchElement', matchElement )
Cypress.Commands.add( 'matchElementNamed', matchElementNamed )
Cypress.Commands.add( 'matchPage', matchPage )
