export default [
  {
    ignores: ['dist', 'node_modules', '.env'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { browser: true, es2020: true },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.2' } },
    plugins: {
      react: await import('eslint-plugin-react'),
      'react-hooks': await import('eslint-plugin-react-hooks'),
      'react-refresh': await import('eslint-plugin-react-refresh'),
    },
    rules: {
      ...await import('eslint-plugin-react').then((r) => r.configs.recommended.rules),
      ...await import('eslint-plugin-react-hooks').then((r) => r.configs.recommended.rules),
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];