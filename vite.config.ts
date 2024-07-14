import { defineConfig } from 'vite';
import { resolve } from 'path';

import handlebars from 'vite-plugin-handlebars';
import { ViteAliases } from 'vite-aliases';

import profileData from './src/pages/profile/data';
import loginData from './src/pages/login/data';
import signInData from './src/pages/sign-in/data';

const pageData = {
  '/index.html': {
    title: 'Main Page',
  },
  '/pages/profile/index.html': profileData,
  '/pages/login/index.html': loginData,
  '/pages/sign-in/index.html': signInData,
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
      deep: false,
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
        sign_in: resolve(__dirname, 'src/pages/sign-in/index.html'),
        '500': resolve(__dirname, 'src/pages/error/500/index.html'),
        '404': resolve(__dirname, 'src/pages/error/404/index.html'),
      },
    },
  },
});
