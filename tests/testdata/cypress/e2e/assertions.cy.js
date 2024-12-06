describe( 'assertions', () => {
    it( 'tests selectors', () => {
        cy.visit( '/elements.html' )

        cy.selectorExist( 'h1' )
        cy.selectorNotExist( '.foobar' )

        cy.selectorContainsString( 'h1', 'Elements Title' )
        cy.selectorNotContainsString( 'h1', 'Foobar Title' )

        cy.selectorContainsValue( 'input[name="email"]', 'example@example.com' )
        cy.selectorNotContainsValue( 'input[name="email"]', 'user@example.com' )

        cy.selectorVisible( 'input[name="email"]' )
        cy.selectorHidden( 'input[type="hidden"]' )

        cy.linkExist( 'https://github.com/tyler36/cypress-support' )
        cy.linkNotExist( 'https://github.com/tyler36/cypress-support/missing' )

        cy.titleContains( 'Elements page' )
        cy.metaDescription( 'Page for testing assertion commands.' )
        cy.metaName( 'author', 'John Doe' )
        cy.metaProp( 'author', 'John Doe' )

        cy.scriptExist( 'example.js' )
    } )

    it( 'detects errors', () => {
        cy.visit( '/elements.html' )
        cy.notSeeErrors()

        // Add an element with class "error"
        cy.document().then( doc => {
            const errorElement = doc.createElement( 'div' )
            errorElement.className = 'error'
            errorElement.textContent = 'This is an error message'
            doc.body.appendChild( errorElement )
        } )

        cy.seeErrors()
    } )

    it( 'tests strings', () => {
        cy.visit( '/elements.html' )
        cy.stringExist( 'Elements Title' )
        cy.stringNotExist( 'Copyright 2010' )
    } )

    it( 'tests urls', () => {
        cy.visit( '/elements.html' )
        cy.pathEqual( '/elements.html' )
        cy.pathNotEqual( '/elements' )

        cy.pathIncludes( 'elements' )
        cy.pathNotIncludes( 'user' )
    } )

    it( 'asserts status code', () => {
        cy.expectStatus( '/', 200 )
        cy.expectStatus( '/invalid', 404 )
    } )
} )
