module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: [
            2,
            4,
            { SwitchCase: 1, VariableDeclarator: { var: 3, let: 3, const: 3 } },
        ],
        'comma-spacing': ['error', { before: false, after: true }],
    },
};
