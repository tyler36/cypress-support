import { When } from '@badeball/cypress-cucumber-preprocessor'
import { stringToJson } from '../../helpers/convert'

/**
 * Create a new 'model'
 *
 * @param {String} model  Type of model to create. Eg. 'App\\Models\\User'
 * @returns void
 */
const createModel = model => cy.createModel( model ).as( model.split( '\\' ).pop() )

/**
 * Create a new 'model' with specific attributes
 *
 * @param {String} model        Type of model to create. Eg. 'App\\Models\\User'
 * @param {String} attributes    JSON string of attributes, should be compatible with 'stringToJson'
 * @returns void
 */
const createModelWith = ( model, attributes = '{}' ) => {
    cy.createModel( model, 1, stringToJson( attributes ) ).as( model.split( '\\' ).pop() )
}

/**
 * Alias to create a generic user
 *
 * @returns void
 */
const createUser = attributes => cy.createModelWith( 'App\\Models\\User', attributes ).as( 'User' )

/**
 * Alias to create a 'staff' User
 *
 * @returns void
 */
const createStaffModelWith = attributes => {
    const updated = {
        profile_type: 'App\\Models\\Staff',
        ...stringToJson( attributes ),
    }
    createModelWith( 'App\\Models\\User', JSON.stringify( updated ) )
}

When( 'I run seed class {string}', cy.seed )
When( 'I refresh database', cy.refreshDatabase )
When( 'I create a user', createUser )
When( 'I create a {string} model', createModel )
When( 'I create a {string} model with {string}', createModelWith )
When( 'I create a staff model with {string}', createStaffModelWith )
