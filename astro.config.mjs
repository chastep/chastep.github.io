import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  site: 'https://thethoughtdungeon.com',
  base: '/',
  output: 'static',
  integrations: [],
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(new URL('.', import.meta.url).pathname, 'src'),
      },
    },
    ssr: {
      external: ['svgo'],
    },
  },
});
