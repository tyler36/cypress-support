/**
 * Enter a "value" into a "name" form element
 * @param {string} value    data to enter into form
 * @param {string} name     "name" attribute of form element
 */
const typeStringInto = ( value, name ) => cy.get( `[name="${name}"]` ).
    clear( {
        force: true,
    } ).
    type( value, {
        force: true,
    } )

Cypress.Commands.add( 'typeStringInto', typeStringInto )
