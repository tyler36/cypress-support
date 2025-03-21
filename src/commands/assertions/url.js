/**
 * Browser URL should match baseURL + "path"
 * @param {string} path appearing after baseURL
 */
const pathEqual = path => cy.url().should( 'eql', Cypress.config().baseUrl + `${path}` )

/**
 * Browser URL should NOT match baseURL + "path"
 * @param {string} path appearing after baseURL
 */
const pathNotEqual = path => cy.url().should( 'not.be', Cypress.config().baseUrl + `${path}` )

/**
 * Browser URL should include the "path"
 * @param {string} path appearing after baseURL
 */
const pathIncludes = path => cy.url().should( 'include', path )

/**
 * Browser URL should NOT include the "path"
 * @param {string} path appearing after baseURL
 */
const pathNotIncludes = path => cy.url().should( 'not.include', path )

/**
 * Request "path" and expect a "statusCode"
 * @param {string} path appearing after baseURL
 * @param {string} statusCode expected status code
 */
const expectStatus = ( path, statusCode ) => cy.request( {
    url: path,
    failOnStatusCode: false,
} ).then( response => {
    expect( response.status ).to.equal( parseInt( statusCode ) )
} )


Cypress.Commands.add( 'pathEqual', pathEqual )
Cypress.Commands.add( 'pathNotEqual', pathNotEqual )
Cypress.Commands.add( 'pathIncludes', pathIncludes )
Cypress.Commands.add( 'pathNotIncludes', pathNotIncludes )

Cypress.Commands.add( 'expectStatus', expectStatus )
