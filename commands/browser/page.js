/**
 * Set header to relative, aka NOT sticky.
 */
const disableHeader = () => cy.get( 'header' ).
    invoke( 'css', 'position', 'relative' )

Cypress.Commands.add( 'disableHeader', disableHeader )
