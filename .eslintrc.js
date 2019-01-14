module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['standard', 'plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
