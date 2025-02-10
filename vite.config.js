import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensure correct relative path
  build: {
    outDir: 'dist', // Ensure the output directory is 'dist'
  },
});
