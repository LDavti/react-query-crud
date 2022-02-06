module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [0, 'never'],
    'import/no-unresolved': [0, 'never'],
    'react/jsx-filename-extension': [0, 'never'],
    'no-unused-vars': [0, 'never'],
    'react/prop-types': [0, 'never'],
    'react/jsx-no-constructed-context-values': [0, 'never'],
    'import/prefer-default-export': [0, 'never'],
    'react/function-component-definition': 'off',
    'object-curly-newline': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
