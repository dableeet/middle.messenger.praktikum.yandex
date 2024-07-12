import { defineConfig } from 'vite';
import { resolve } from 'path';

import handlebars from 'vite-plugin-handlebars';
import { ViteAliases } from 'vite-aliases';

import profileData from './src/pages/profile/data';
import loginData from './src/pages/login/data';

const pageData = {
  '/index.html': {
    title: 'Main Page',
  },
  '/pages/profile/index.html': profileData,
  '/pages/login/index.html': loginData,
};

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context(pagePath: string) {
        return pageData[pagePath];
      },
    }),
    ViteAliases({
      dir: 'src',
      prefix: '@',
    }),
  ],
  server: {
    port: 3000,
  },
  root: './src',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
      },
    },
  },
});
