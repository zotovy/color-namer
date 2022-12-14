module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'prettier',
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        "vue/multi-word-component-names": 0,
        "vue/script-setup-uses-vars": 1,
        "import/first": 0,
        "vue/no-multiple-template-root": 0
    },
}
