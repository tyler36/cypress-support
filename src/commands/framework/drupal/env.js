/**
 * @description           Get a 'user' object from Cypress ENV
 * @param {string} name   user 'name
 * @return {object}       Cypress $Chainer
 */
Cypress.Commands.add( 'getEnvUser', name => {
    const user = Object.fromEntries( Object.entries( Cypress.env( 'users' ) ).
        filter( ( [, value,] ) => value.name === name ) )

    if ( !Object.keys( user ).length ) {
        throw new Error( `${name} does not exist in ENV` )
    }

    return user
} )
