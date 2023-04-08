import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
