export default defineNuxtConfig({
	modules: [
		[
			'@storyblok/nuxt',
			{
				accessToken: 'VxBtQrfsVw2i2BOPxKposQtt',
				apiOptions: {
					region: "eu" // Hard coded EU for safety 🙂
				}
			},
		],
	],
	app: {
		head: {
			script: [{ src: 'https://cdn.tailwindcss.com' }],
		},
	}
});
