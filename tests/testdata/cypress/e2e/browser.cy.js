describe( 'browser', () => {
    it( 'removes sticky from page header', () => {
        cy.visit( '/browser.html' )

        cy.get( 'header' ).should( 'have.css', 'position', 'sticky' )

        cy.disableHeader()
        cy.get( 'header' ).should( 'have.css', 'position', 'relative' )
    } )

    // TODO: Add screenshot tests
} )
