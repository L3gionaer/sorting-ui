import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    prerender: {
      entries: ['/', '/bubbleSort', '/quickSort', '/selectionSort', '/insertionSort']
    }
    // paths: {
    //   base: '/sorting-ui',
    //   assets: 'https://l3gionaer.github.io/sorting-ui'
    // }
  }
  // compilerOptions: {
  //   runes: true
  // },
  // vitePlugin: {
  //   dynamicCompileOptions({ filename }) {
  //     if (filename.includes('node_modules') || filename.includes('ui')) {
  //       return { runes: undefined }; // or false, check what works
  //     }
  //   }
  // }
};

export default config;
