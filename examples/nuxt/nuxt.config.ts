// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    resolve: {
      alias: {
        /**
         * Provide browser-compatible polyfills for Node.js modules which is used in `component-library/hydrate`
         */
        stream: 'stream-browserify',
      },
    },
  },
  ssr: false,
});
