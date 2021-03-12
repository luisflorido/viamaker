module.exports = {
  env: {
    es6: true,
  },
  globals: {
    __DEV__: 'readonly',
    document: 'readonly',
    sessionStorage: 'readonly',
    localStorage: 'readonly',
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    camelcase: 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
