module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended', 'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: [
    'react', 'jsx-a11y', 'jsdoc',
  ],
  rules: {
    indent: [2, 2, {
      SwitchCase: 1,
    }],
    'linebreak-style': [2, 'unix'],
    'max-len': [1, {
      code: 160,
    }],
    'no-multiple-empty-lines': [2, {
      max: 4,
      maxEOF: 2,
      maxBOF: 2,
    }],
    'array-element-newline': [
      1, {
        ArrayExpression: 'consistent',
        ArrayPattern: { minItems: 5, multiline: true },
      },
    ],
    'object-curly-newline':
      [1, {
        ObjectExpression: {
          multiline: true, consistent: true,
        },
        ObjectPattern: {
          multiline: true, consistent: true,
        },
        ImportDeclaration: {
          multiline: true, consistent: true,
        },
      }],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-empty': [
      'error', {
        allowEmptyCatch: true,
      },
    ],
    // 'arrow-parens': [1, 'as-needed'],
    // 'arrow-body-style': [1, 'as-needed'],
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'no-confusing-arrow': 1,
    'implicit-arrow-linebreak': 0,
    // Disabled because of https://github.com/eslint/eslint/issues/6028
    'no-extra-parens': [
      1, 'all', {
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: 'multi-line',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForFunctionPrototypeMethods: false,
      },
    ],
    'no-extra-semi': 'error',
    'no-restricted-imports': [
      1, // 2,
      {
        paths: [
          {
            name: 'aws-amplify',
            message: 'Use the custom API instead.',
          }, {
            name: 'underscore',
            message: 'Use lodash instead.',
          },
        ],
        // patterns: ['@material-ui/core/*'],
      },
    ],
    'no-unused-vars': 1,
    'no-multi-spaces': [1, {
      ignoreEOLComments: true,
    }],
    'import/prefer-default-export': 0,
    'import/no-cycle': [2, {
      maxDepth: 2,
      ignoreExternal: true,
    }],
    'jsx-a11y/anchor-is-valid': 0, // Disabled because it interfers with our Link Component
    // React:
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx'],
    }],
    'react/jsx-one-expression-per-line': [1, {
      allow: 'single-child',
    }],
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 1,
    'react/prop-types': [
      1, {
        ignore: ['children'],
      },
    ],
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    // jsDoc:
    'jsdoc/require-jsdoc': [
      1, // 2,
      {
        publicOnly: false,
        exemptEmptyFunctions: true,
      },
    ],
    'jsdoc/check-alignment': 1, // 2,
    'jsdoc/check-indentation': 1,
    'jsdoc/check-syntax': 1, // 2,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1, // 2,
    'jsdoc/implements-on-classes': 1, // 2,
    'jsdoc/match-description': 0,
    'jsdoc/newline-after-description': 1,
    'jsdoc/no-types': 0,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-description': 1, // 2,
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-example': [
      // eslint-disable-next-line array-element-newline
      0, // Let's start with this off, toggle on later.
      {
        avoidExampleOnConstructors: true,
      },
    ],
    'jsdoc/check-examples': 1, // 2,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/check-param-names': 1, // 2,
    'jsdoc/require-param': [1, {
      unnamedRootBase: ['props', 'args'],
    },
    ], // 2,
    'jsdoc/require-param-name': 1, // 2,
    'jsdoc/require-param-type': 1, // 2,
    'jsdoc/require-param-description': 0,
    'jsdoc/require-returns': 1, // 2,
    'jsdoc/require-returns-type': 1, // 2,
    'jsdoc/require-returns-check': 1, // 2,
    'jsdoc/require-returns-description': 0,
    'jsdoc/valid-types': 1,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
    jsdoc: {
      tagNamePreference: {
        augments: {
          message: 'Please use @extends over @augments',
          replacement: 'extends',
        },
      },
    },
  },
};
