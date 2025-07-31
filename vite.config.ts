import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // ✅ this must be at the top level, NOT inside optimizeDeps
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
