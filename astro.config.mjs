import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), mdx(), vue(), prefetch(), partytown()]
});