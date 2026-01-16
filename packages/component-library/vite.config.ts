import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      projects: ['./tsconfig.vitest.json']
    })
  ],
  build: {
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ComponentLibrary',
      formats: ['es'],
      fileName: () => `component-library.mjs`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
        assetFileNames: (assetInfo) => {
          // Renames the default 'style.css' output to 'component-library.css' to match package.json exports
          const hasCss =
            assetInfo.names?.some((name) => name.includes('.css') || name.includes('css')) ||
            assetInfo.originalFileNames?.some((name) => name.endsWith('.css'));

          if (hasCss) {
            return 'component-library.css';
          }
          // For other assets, use default pattern
          return '[name][extname]';
        }
      }
    },
    cssCodeSplit: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    },
    include: ['**/*.{test,spec}.{ts,tsx}'],
    typecheck: {
      tsconfig: './tsconfig.vitest.json'
    }
  }
});
