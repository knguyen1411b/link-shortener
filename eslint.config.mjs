import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    prettier,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'off',
            'require-await': 'warn'
        }
    },
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
])

export default eslintConfig
