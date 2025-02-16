import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      base:
        process.env.NODE_ENV === "production" ? "/Muhammad-Abdullah012.github.io" : "",
    },
  },
};
