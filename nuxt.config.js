export default defineNuxtConfig({
	modules: [
		[
			'@storyblok/nuxt',
			{
				accessToken: 'VxBtQrfsVw2i2BOPxKposQtt',
				apiOptions: {
					region: 'eu' // Hard coded EU for safety 🙂
				}
			}
		],
		'@nuxt/image'
	],
	app: {
		head: {
			meta: [
				{
				  name: 'viewport',
				  content: 'width=device-width, height=device-height, initial-scale=1'
				},
			  ],
			script: [{ src: 'https://cdn.tailwindcss.com' }],
			link : [
				{ rel: 'preload', href:'/fonts/agno3dr.woff2' },
				{ rel: 'preload', href:'/fonts/agno3dr.ttf' },
				{ rel: 'preload', href:'/fonts/opensans-regular.woff2' },
				{ rel: 'preload', href:'/fonts/opensans-regular.ttf' }
			]
		},
		pageTransition : true
	},
	plugins: [
		// {
		// 	src: '~/plugins/fontawesome.js',
		// 	mode: 'client'
		// }
	],
	css: [
		'~/assets/style/global.scss',
		'~/assets/style/global.css',
		'@fortawesome/fontawesome-svg-core/styles.css'
	],
	image: {
		provider: 'storyblok',
		storyblok: {
			baseURL : 'https://a.storyblok.com'
		}
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all',
			automaticNameDelimiter: '.',
			name: true,
			maxSize: 244000,
			cacheGroups: {
				vendor: {
					name: 'node_vendors',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					maxSize: 244000
				}
			}
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	}
});
