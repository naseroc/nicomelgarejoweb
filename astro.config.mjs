import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://nicomelgarejo.com',
  integrations: [partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()]
});