// eslint-disable-next-line import/no-unresolved
import { Configuration } from '@nuxt/types'

const nuxtConfig: Configuration = {
	mode: 'universal',
	srcDir: 'src/',
	loading: false,
	modules: [
		'@bazzite/nuxt-optimized-images',
		'@nuxtjs/pwa',
		'@nuxtjs/svg-sprite',
		'@nuxtjs/style-resources',
		'@nuxtjs/google-analytics'
	],
	buildModules: ['@nuxt/typescript-build'],
	css: ['minireset.css'],
	styleResources: {
		scss: ['~/assets/main.scss', '@brandcolors/sass', 'mathsass']
	},
	optimizedImages: {
		optimizeImages: true
	},
	manifest: {
		lang: 'ja',
		name: 'sno2wman.dev',
		short_name: 'sno2wman.dev', // eslint-disable-line @typescript-eslint/camelcase
		description: '@SnO2WMaN Website',
		orientation: 'portrait'
	},
	googleAnalytics: {
		id: 'UA-103663993-3'
	},
	head: {
		titleTemplate: '%s - sno2wman.dev'
	},
	meta: {
		ogImage: 'https://gravatar.com/avatar/9a828752a7771c3bf43e3bea39d9cf57',
		twitterCard: 'summary',
		twitterSite: '@SnO2WMaN',
		twitterCreator: '@SnO2WMaN'
	},
	workbox: {
		runtimeCaching: [
			{
				urlPattern: 'https://fonts.googleapis.com/.*',
				handler: 'cacheFirst',
				method: 'GET'
			},
			{
				urlPattern: 'https://fonts.gstatic.com/.*',
				handler: 'cacheFirst',
				method: 'GET'
			}
		]
	},
	build: {
		cache: true,
		postcss: {
			plugins: {
				'postcss-short': {}
			}
		}
	}
}
export default nuxtConfig
