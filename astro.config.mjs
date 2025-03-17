// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{ slug: 'home/home' },
				{
					label: 'Python',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Basic python', slug: 'guides/example' },
					],
				},
				{
					label: 'Dev Ops',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'SSL cert', slug: 'reference/example' },
					],
				},
			],
		}),
	],
});
