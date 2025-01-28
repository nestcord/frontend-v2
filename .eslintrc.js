module.exports = {
    parser: '@typescript-eslint/parser', // Use the TypeScript parser
    extends: [
      'eslint:recommended',               // Basic ESLint recommendations
      'plugin:@typescript-eslint/recommended', // Recommended TypeScript rules
      'plugin:react/recommended',         // React specific linting rules
      'plugin:react-hooks/recommended',   // React Hooks linting rules
      'next/core-web-vitals'              // Next.js recommended linting rules
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',  // Enable the rule for unused variables
      'react/react-in-jsx-scope': 'off',            // React 17+ doesn't need React import in every file
      'react/prop-types': 'off',                    // Disable prop-types validation (TypeScript handles this)
      'no-console': 'warn'                          // Warn about console logs
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  };
  