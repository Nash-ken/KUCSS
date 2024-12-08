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
      base: process.argv.includes("dev") ? "" : "/KUCSS",
    },
    alias: {
      "@components": path.resolve("src/lib/components"),
    },
  },
};

export default config;
