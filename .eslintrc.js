module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-empty-pattern': 0,
    'no-unused-vars': 0,
    'no-console': 2,
    'jsx-quotes': [
      0,
      'prefer-single'
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
