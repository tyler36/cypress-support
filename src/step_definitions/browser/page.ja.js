import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given( '{string}にアクセスします', cy.visit )

Given( '固定ヘッダーを無効にします', cy.disableHeader )
