import { When } from '@badeball/cypress-cucumber-preprocessor'

When( '{string}に{string}と入力します', ( name, query ) => cy.typeStringInto( query, name ) )

When( '{string}をチェックします', name => cy.checkSelector( `[name="${name}"]` ) )
When( '{string}で{string}を選択します', ( select, option ) => cy.selectOption( option, select ) )

When( 'フォームを送信します', cy.submit )
