import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: './src/mount.tsx',
      name: 'EarningsWidget',
      formats: ['umd', 'iife'],
      fileName: 'earnings-widget',
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
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
