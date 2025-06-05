import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const isLib = process.env.BUILD_MODE === 'lib';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env': {},
  },
  build: isLib
    ? {
        cssCodeSplit: false,
        lib: {
          entry: './src/mount.tsx',
          name: 'EarningsWidget',
          formats: ['umd', 'iife'],
          fileName: (format) => `earnings-widget.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
        outDir: 'dist',
        assetsDir: 'assets',
      }
    : {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        sourcemap: true,
      },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
