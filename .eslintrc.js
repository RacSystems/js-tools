module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers',
    'sort-destructure-keys',
    'typescript-sort-keys'
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never'
      }
    ],
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'import/prefer-default-export': 'off',
    'sort-imports': [
      'error',
      {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
      }
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      {
        'caseSensitive': false
      }
    ],
    'import-helpers/order-imports': [
      'warn',
      {
          'newlinesBetween': 'always',
          'groups': [
            'module',
            ['parent', 'sibling', 'index']
          ],
          'alphabetize': {
            'order': 'asc',
            'ignoreCase': true
          }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true
        }
      },
      {
        'selector': 'enum',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^E[A-Z]',
          'match': true
        }
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
