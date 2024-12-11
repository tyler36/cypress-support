describe( 'Interaction Commands', () => {
    it( 'clicks a selector', () => {
        cy.visit( '/interactions.html' )

        const target = cy.get( 'main [js-test="click"]' )
        target.should( 'not.include.text', 'updated' )

        cy.clickSelector( 'main [js-test="click"]' )
        target.contains( 'updated' )
    } )

    it( 'clicks text', () => {
        cy.visit( '/interactions.html' )

        const target = cy.get( '[js-test="click"]' )
        target.should( 'not.include.text', 'updated' )

        cy.clickText( 'clickable' )
        target.contains( 'updated' )
    } )

    it( 'clicks text in a selector', () => {
        cy.visit( '/interactions.html' )

        const target = cy.get( 'footer [js-test="click"]' )
        target.should( 'not.include.text', 'updated' )

        const decoy = cy.get( 'main [js-test="click"]' )
        decoy.should( 'not.include.text', 'updated' )

        cy.clickTextIn( 'clickable', 'footer' )
        decoy.should( 'not.include.text', 'updated' )
        target.contains( 'updated' )
    } )

    it( 'checks checkbox selector', () => {
        cy.visit( '/interactions.html' )

        const selector = '[name="checkbox"]'
        const target = cy.get( selector )
        target.should( 'not.be.checked' )

        cy.checkSelector( selector )
        target.should( 'be.checked' )
    } )

    it( 'selects a form option', () => {
        cy.visit( '/interactions.html' )

        cy.get( 'select[name="fruit"] [value="apple"]' ).should( 'be.selected' )

        cy.selectOption( 'banana', 'fruit' )
        cy.get( 'select[name="fruit"] [value="banana"]' ).should( 'be.selected' )
    } )

    it( 'types text into input', () => {
        cy.visit( '/interactions.html' )

        const email = 'example@example.com'
        const target = cy.get( '[name="email"]' )

        target.should( 'not.have.value', email )
        cy.typeStringInto( email, 'email' )
        target.should( 'have.value', email )
    } )

    it( 'scroll the page', () => {
        cy.visit( '/interactions.html' )

        cy.get( '#toTop' ).should( 'not.be.visible' )

        cy.scrollDistance( 500 )
        cy.get( '#toTop' ).should( 'be.visible' )

        cy.scrollDistance( -500 )
        cy.get( '#toTop' ).should( 'not.be.visible' )
    } )

    it( 'It scrolls a selector', () => {
        cy.visit( '/interactions.html' )

        cy.get( '#privacy-confirmed' ).should( 'not.be.visible' )
        cy.get( '.privacy' ).scrollTo( 'bottom' )
        cy.get( '#privacy-confirmed' ).should( 'be.visible' )
    } )
} )
