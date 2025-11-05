import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess'; // Add this import

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
        typescript: {
            transpileOnly: false, // Ensure full TypeScript checks
        },
    }),

    kit: {
        adapter: adapter(),
    },
};

export default config;
