// svelte.config.js

import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    // Other SvelteKit configurations
    // ...

    // Add this adapter configuration with the correct target selector
    adapter: adapter({
      fallback: '404.html',
      target: 'body > .relative.z-[1]'
    }),
  },
};
