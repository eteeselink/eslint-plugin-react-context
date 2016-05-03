'use strict';

module.exports = {
  rules: {
    'context-types': require('./lib/rules/context-types')
  },
  configs: {
    recommended: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'react-context/context-types': 2
      }
    }
  }
};
