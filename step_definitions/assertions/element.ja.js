import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then( '{string}セレクターが表示されるはずです', cy.selectorExist )
Then( '{string}セレクターが表示されないはずです', cy.selectorNotExist )

Then( '{string}に{string}を見る必要があります', ( selector, string ) => cy.selectorContainsString( selector, string ) )
Then(
    '{string}に{string}を見るべきではありません',
    ( selector, string ) => cy.selectorNotContainsString( selector, string )
)

Then( '{string}は{string}値を持っている必要があります', cy.selectorContainsValue )
Then( '{string}は{string}値を持たないはずです', cy.selectorNotContainsValue )

Then( '{string}セレクターが表示されている必要があります', cy.selectorVisible )
Then( '{string}セレクターは非表示にする必要があります', cy.selectorHidden )

Then( '{string}へのリンクが表示されます', cy.linkExist )
Then( '{string}へのリンクは表示されません', cy.linkNotExist )

Then( 'タイトルには{string}を含める必要があります', cy.titleContains )

Then( '説明は{string}でなければなりません', cy.metaDescription )
Then( 'メタプロパティ{string}は{string}を含める必要があります', cy.metaProp )
Then( 'メタ名{string}は{string}を含める必要があります', cy.metaName )

Then( 'スクリプト{string}が存在するはずです', cy.scriptExist )

Then( '{string}セレクターには、{string}に{string}に設定されている必要があります', cy.cssSelectorSet )
Then( '{string}セレクターには、{string}に設定されているcss {string}に設定されてはいけません', cy.cssSelectorNotSet )

Then( '{string}はチェックする必要があります', cy.selectorIsChecked )
Then( '{string}はチェックしないでください', cy.selectorIsNotChecked )
Then( 'エラーは表示されません', cy.notSeeErrors )
