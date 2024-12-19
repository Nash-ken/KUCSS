import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess({ script: true }),

  kit: {
    adapter: adapter({
      fallback: "404.html",
      pages: "build",
      assets: "build",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
    alias: {
      "@components": path.resolve("src/lib/components"),
      "@stores": path.resolve("src/lib/stores"),
      "@types": path.resolve("src/lib/types"),
    },
  },
};

export default config;
