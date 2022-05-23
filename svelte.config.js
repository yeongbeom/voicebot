import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		methodOverride: {
			allowed: ['PUT', 'PATCH', 'DELETE']
		},
		adapter: adapter(),

		vite: {
			server: {
				hmr: {
					clientPort: 20443,
					host: '10.1.93.21'
					/*
					clientPort: process.env.HMR_HOST ? 443 : 3000,
					host: process.env.HMR_HOST
						? process.env.HMR_HOST.substring('https://'.length)
						: 'localhost'
					*/
				}
			}
		}
	}
};

export default config;
