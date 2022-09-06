import { defineNuxtPlugin } from "#app";
import Maska from "maska";

export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.use(Maska)
})
