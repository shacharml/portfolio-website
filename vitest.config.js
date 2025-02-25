import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',  // Simulates a browser for testing React components
    globals: true,         // Enables Jest-like global functions (e.g., `test`, `expect`)
    setupFiles: './vitest.setup.js', // Runs this file before tests (we'll create it next)
  },
});


// Explanation:
// environment: 'jsdom' → Makes sure we can test components as if they were in a browser.
// globals: true → Lets you use test() and expect() without importing them in every test file.
// setupFiles → A file that loads additional settings before running tests.