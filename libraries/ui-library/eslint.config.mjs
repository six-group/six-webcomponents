import tseslint from 'typescript-eslint';
import stencil from '@stencil-community/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/**', 'loader/**', 'www/**', 'docs/**', 'node_modules/**'],
  },
  ...tseslint.configs.recommended,
  stencil.configs.flat.recommended,
  eslintConfigPrettier,
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'react/jsx-no-bind': 'off',
      '@stencil-community/decorators-style': 'off',
      '@stencil-community/reserved-member-names': 'off',
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    },
  }
);
