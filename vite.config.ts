import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

import profileData from './pages/profile/data';

const pageData = {
  '/index.html': {
    title: 'Main Page',
  },
  '/pages/profile/index.html': profileData,
};

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context(pagePath: string) {
        return pageData[pagePath];
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
