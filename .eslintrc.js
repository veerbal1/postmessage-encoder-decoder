module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'require-jsdoc': 'off',
  },
};
