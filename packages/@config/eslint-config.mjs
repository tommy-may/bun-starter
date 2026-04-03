/**
 * @typedef {import("@eslint/config-helpers").ConfigWithExtendsArray} ConfigWithExtendsArray
 * @typedef {import("@eslint/config-helpers").Config} Config
 */

import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig as eslintConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

/**
 * @type {ConfigWithExtendsArray}
 */
const defaultConfig = [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
    },
  },
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        // projectService: true,
        projectService: {
          allowDefaultProject: ['*.mjs', 'packages/@config/*.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{ts,mts,cts}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
];

/**
 * @type {ConfigWithExtendsArray}
 */
const perfectionistConfig = [
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-intersection-types': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
    },
  },
];

/**
 * @param {ConfigWithExtendsArray} config
 * @returns {Config[]}
 */
export const defineConfig = (...config) =>
  eslintConfig([...defaultConfig, ...perfectionistConfig, ...config, prettier]);

export default defineConfig();
