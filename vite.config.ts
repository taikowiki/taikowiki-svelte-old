import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import express from 'vite-plugin-express';

export default defineConfig({
	plugins: [sveltekit(), express({
		middlewareFiles:'./express/router',
		prefixUrl:'/ex'
	})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
