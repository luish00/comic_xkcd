module.exports = {
  root: true,
  extends: ['airbnb'],
  env: { browser: true },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    plugins: [
      'react',
      'airbnb',
      'babel',
    ],
    parser: '@babel/eslint-parser',
    rules: {
      'no-unsafe-optional-chaining': true,
      'import/prefer-default-export': 'off',
      'object-curly-newline': ['error', {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true, minProperties: 5 },
        ExportDeclaration: { multiline: true, minProperties: 5 },
      }],
    },
  },
};
