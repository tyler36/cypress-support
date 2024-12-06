import globals from 'globals'
import js from '@eslint/js'
import pluginCypress from 'eslint-plugin-cypress/flat'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
    js.configs.recommended,
    {
        languageOptions: {
            // Set common globals (windows,document...) to prevent "no-undef"
            globals: {
                ...globals.browser,
                // Cypress-specific globals
                after: true,
                assert: true,
                before: true,
                beforeEach: true,
                cy: true,
                Cypress: true,
                expect: true,
            },
        },
        plugins: {
            '@stylistic/js': stylisticJs,
            Cypress: pluginCypress,
        },
        ignores: ['node_modules', 'vendor', '.gitlab-ci-local',],
        rules: {
            // Possible errors
            'no-duplicate-imports': 'error',
            'no-unreachable-loop': 'error',
            // Suggestions
            'arrow-body-style': 'error',
            'capitalized-comments': 'error',
            'default-case': 'error',
            'default-case-last': 'error',
            eqeqeq: 'error',
            'max-depth': 'error',
            'no-alert': 'error',
            'no-case-declarations': 'error',
            'no-else-return': 'error',
            'no-empty': 'error',
            'no-lonely-if': 'error',
            'no-unneeded-ternary': 'error',
            'no-useless-concat': 'error',
            'no-useless-constructor': 'error',
            'no-var': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-numeric-literals': 'error',
            'prefer-spread': 'error',
            'require-await': 'error',
            'sort-imports': 'error',
            'sort-vars': 'error',
            // Styling
            '@stylistic/js/array-bracket-spacing': 'error',
            '@stylistic/js/array-bracket-newline': ['error', 'consistent',],
            '@stylistic/js/arrow-parens': ['error', 'as-needed',],
            '@stylistic/js/arrow-spacing': 'error',
            '@stylistic/js/block-spacing': 'error',
            '@stylistic/js/brace-style': 'error',
            '@stylistic/js/comma-dangle': [
                'error',
                {
                    arrays: 'always',
                    objects: 'always',
                },
            ],
            '@stylistic/js/comma-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            '@stylistic/js/computed-property-spacing': 'error',
            '@stylistic/js/dot-location': 'error',
            '@stylistic/js/eol-last': 'error',
            '@stylistic/js/function-call-spacing': 'error',
            '@stylistic/js/function-paren-newline': 'error',
            '@stylistic/js/implicit-arrow-linebreak': 'error',
            '@stylistic/js/jsx-quotes': ['error', 'prefer-single',],
            '@stylistic/js/key-spacing': [
                'error',
                {
                    beforeColon: false,
                    afterColon: true,
                    mode: 'strict',
                },
            ],
            '@stylistic/js/keyword-spacing': [
                'error',
                {
                    before: true,
                    after: true,
                },
            ],
            '@stylistic/js/line-comment-position': 'error',
            '@stylistic/js/linebreak-style': ['error', 'unix',],
            '@stylistic/js/lines-around-comment': [
                'error',
                {
                    beforeBlockComment: false,
                    afterBlockComment: false,
                    beforeLineComment: false,
                    afterLineComment: false,
                    allowBlockStart: true,
                    allowBlockEnd: true,
                    allowObjectStart: true,
                    allowObjectEnd: true,
                    allowArrayStart: true,
                    allowArrayEnd: true,
                },
            ],
            '@stylistic/js/lines-between-class-members': ['error', 'always',],
            '@stylistic/js/max-len': [
                'error',
                {
                    code: 120,
                    tabWidth: 4,
                    comments: 120,
                    ignoreTrailingComments: true,
                    ignoreUrls: true,
                },
            ],
            '@stylistic/js/max-statements-per-line': [
                'error',
                {
                    max: 1,
                },
            ],
            '@stylistic/js/multiline-comment-style': 'error',
            '@stylistic/js/multiline-ternary': 'error',
            '@stylistic/js/indent': ['error', 4,],
            '@stylistic/js/new-parens': 'error',
            '@stylistic/js/newline-per-chained-call': [
                'error',
                {
                    ignoreChainWithDepth: 2,
                },
            ],
            '@stylistic/js/no-mixed-operators': 'error',
            '@stylistic/js/no-multiple-empty-lines': [
                'error',
                {
                    max: 2,
                },
            ],
            '@stylistic/js/no-tabs': 'error',
            '@stylistic/js/no-trailing-spaces': 'error',
            '@stylistic/js/no-whitespace-before-property': 'error',
            '@stylistic/js/object-curly-newline': [
                'error',
                {
                    consistent: true,
                },
            ],
            '@stylistic/js/object-curly-spacing': ['error', 'always',],
            '@stylistic/js/object-property-newline': 'error',
            'padded-blocks': [
                'error',
                {
                    blocks: 'never',
                    switches: 'never',
                    classes: 'never',
                },
            ],
            '@stylistic/js/padding-line-between-statements': 'error',
            '@stylistic/js/quote-props': ['error', 'as-needed',],
            '@stylistic/js/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true,
                },
            ],
            '@stylistic/js/semi': ['error', 'never',],
            '@stylistic/js/semi-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            '@stylistic/js/semi-style': 'error',
            'space-before-blocks': [
                'error',
                {
                    functions: 'always',
                    keywords: 'always',
                    classes: 'always',
                },
            ],
            '@stylistic/js/space-before-function-paren': [
                'error',
                {
                    anonymous: 'always',
                    named: 'never',
                },
            ],
            '@stylistic/js/space-in-parens': [
                'error',
                'always',
                {
                    exceptions: [],
                },
            ],
            '@stylistic/js/space-infix-ops': 'error',
            '@stylistic/js/space-unary-ops': [
                'error',
                {
                    words: true,
                    nonwords: false,
                },
            ],
            '@stylistic/js/spaced-comment': [
                'error',
                'always',
                {
                    line: {
                        markers: ['/', '//',],
                        exceptions: ['-', '+',],
                    },
                    block: {
                        markers: ['!',],
                        exceptions: ['*',],
                    },
                },
            ],
            '@stylistic/js/switch-colon-spacing': 'error',
        },
    },
]
