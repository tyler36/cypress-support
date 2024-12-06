import message from '../../../../cypress/fixtures/message.json'

/**
 * Assert "selector" exists on page
 * @param {string} selector CSS selector
 */
const selectorExist = selector => cy.get( selector ).should( 'exist' )

/**
 * Assert "selector" does NOT exist on page
 * @param {string} selector CSS selector
 */
const selectorNotExist = selector => cy.get( selector ).should( 'not.exist' )

/**
 * Assert "selector" contains "text"
 * @param {string} selector
 * @param {string} text
 */
const selectorContainsString = ( selector, text ) => cy.get( selector ).should( 'contain', text )

/**
 * Assert "selector" does NOT contain "text"
 * @param {string} selector
 * @param {string} text
 */
const selectorNotContainsString = ( selector, text ) => cy.get( selector ).should( 'not.contain', text )

/**
 * Selector should have value set
 * @param {string} selector
 * @param {string} value
 */
const selectorContainsValue = ( selector, value ) => cy.get( selector ).should( 'have.value', value )

/**
 * Selector should NOT have value set. Opposite of "selectorContainsValue"
 * @param {string} selector
 * @param {string} value
 */
const selectorNotContainsValue = ( selector, value ) => cy.get( selector ).should( 'not.have.value', value )

/**
 * Assert "selector" is visible on page
 * @param {string} selector
 */
const selectorVisible = selector => cy.get( selector ).then( $el => assert.isTrue( Cypress.dom.isVisible( $el ) ) )

/**
 * Assert "selector" is NOT visible on page
 * @param {string} selector
 */
const selectorHidden = selector => cy.get( selector ).then( $el => assert.isTrue( Cypress.dom.isHidden( $el ) ) )

/**
 *Assert link to "path" exists
 * @param {string} uri  uri
 */
const linkExist = uri => cy.get( `a[href$="${uri}"]` ).should( 'exist' )

/**
 * Assert link to "path" does NOT exist
 * @param {string} uri uri
 */
const linkNotExist = uri => cy.get( `a[href$="${uri}"]` ).should( 'not.exist' )

/**
 * Assert page title contains text
 * @param {string} text
 */
const titleContains = text => cy.title().should( 'include', text )

/**
 * Assert page description is set to "text"
 * @param {string} text
 */
const metaDescription = text => metaName( 'description', text )

/**
 * Assert "name" meta-tag with has content set to "text"
 * @param {string} name attribute
 * @param {string} text
 */
const metaName = ( name, text ) => cy.get( `meta[name="${name}"]` ).should( 'have.attr', 'content', text )

/**
 * Assert "property" meta-tag with has content set to "text"
 * @param {string} property attribute
 * @param {string} text
 */
const metaProp = ( property, text ) => cy.get( `meta[property="${property}"]` ).should( 'have.attr', 'content', text )

/**
 * Assert script element with "scriptSrc" exists
 * @param {string} scriptSrc
 */
const scriptExist = scriptSrc => selectorExist( `script[src="${scriptSrc}"]` )

/**
 * "Error" selector does NOT exist on page. Alias
 */
const notSeeErrors = () => selectorNotExist( message.error )

Cypress.Commands.add( 'selectorExist', selectorExist )
Cypress.Commands.add( 'selectorNotExist', selectorNotExist )
Cypress.Commands.add( 'selectorContainsString', selectorContainsString )
Cypress.Commands.add( 'selectorNotContainsString', selectorNotContainsString )
Cypress.Commands.add( 'selectorContainsValue', selectorContainsValue )
Cypress.Commands.add( 'selectorNotContainsValue', selectorNotContainsValue )
Cypress.Commands.add( 'selectorVisible', selectorVisible )
Cypress.Commands.add( 'selectorHidden', selectorHidden )

Cypress.Commands.add( 'linkExist', linkExist )
Cypress.Commands.add( 'linkNotExist', linkNotExist )

Cypress.Commands.add( 'titleContains', titleContains )
Cypress.Commands.add( 'metaDescription', metaDescription )
Cypress.Commands.add( 'metaName', metaName )
Cypress.Commands.add( 'metaProp', metaProp )
Cypress.Commands.add( 'scriptExist', scriptExist )

Cypress.Commands.add( 'notSeeErrors', notSeeErrors )
