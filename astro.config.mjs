// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Sorts Mill Goudy',
        cssVariable: '--font-sorts-mill-goudy',
      },
      {
        provider: 'local',
        name: 'Pretendard',
        cssVariable: '--font-pretendard',
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: [
              './node_modules/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2',
            ],
          },
        ],
      },
    ],
  },
});
