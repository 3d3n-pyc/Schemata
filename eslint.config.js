import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
    // Base ESLint recommended rules
    eslintJs.configs.recommended,

    // TypeScript ESLint recommended rules
    ...tseslint.configs.recommended,

    // Astro ESLint recommended rules
    ...eslintPluginAstro.configs.recommended,

    {
        rules: {
            // Custom rules - adjust as needed
            '@typescript-eslint/no-unused-vars': ['warn', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }],
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },

    {
        ignores: [
            'dist/',
            'node_modules/',
            '.astro/',
            '*.config.js',
            '*.config.mjs',
        ],
    },
];
