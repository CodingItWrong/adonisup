module.exports = {
  extends: [
    'eslint:recommended',
    'codingitwrong',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    use: true,
  },
}
