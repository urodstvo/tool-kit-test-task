module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:cypress/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '*.gen.ts', '*.test.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', '@graphql-eslint'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'no-console': 0,
    },
};
