module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'never'
    }],
    indent: ['error', 2],
    'comma-spacing': 0,
    'react/display-name': [0, { ignoreTranspilerName: true }],
    'import/no-duplicates': ['off', { considerQueryString: true }],
    'no-unused-vars': 1
  }
}
