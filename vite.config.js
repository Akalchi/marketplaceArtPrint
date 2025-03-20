import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        parserOpts: {
          plugins: ['dynamicImport'],
        },
      },
    }),
  ],
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
      hashPrefix: 'myapp',
    },
  },
  test: {
    environment: 'jsdom',
   setupFiles: './src/tests/setup.js',
    globals: true
  }
});
