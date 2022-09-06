import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'vue-todolist',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/styles/normalize.css',
        '@/assets/styles/globals.scss',
        '@/assets/styles/animations.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://google-fonts.nuxtjs.org/
        '@nuxtjs/google-fonts',
        '@pinia/nuxt',
        'unplugin-icons/nuxt'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa'
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    googleFonts: {
        families: {
            Poppins: [300, 400, 500, 600, 700]
        }
    },

    vite: {
        plugins: [
            eslintPlugin(),
            Icons({
                compiler: "vue3",
                autoInstall: true
            })
        ]
    },
})
