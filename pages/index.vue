<template>
    <main class="color-container" :style="{ '--bg': color.hex, '--contrast': contrast }">
        <div class="content">
            <TitleComponent>{{ color.name }}</TitleComponent>
            <ColorInput @submit="fetchColor" v-model="colorInput"/>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useColorStore } from "~/stores/color";
import TitleComponent from "~/components/typography/Title";
import ColorInput from "~/components/ColorInput.vue";
import { computed } from "#imports";

const colorInput = ref("#5c6ac4");

const color = useColorStore()

const contrast = computed(() => {
    const [r, g, b] = color.rgb
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return luma > 128 ? "#000" : "#fff"
})

const fetchColor = () => {
    console.log("fetching color", colorInput.value)
    color.fetch(colorInput.value)
}

</script>

<style lang="scss" scoped>
.color-container {
    height: 100vh;
    width: 100vw;
    position: static;
    padding: 3.5rem 4rem;
    background-color: var(--bg);
    cursor: pointer;
    transition: 0.15s ease;

    .content {
        max-width: 40%;
        color: var(--contrast);
        transition: 0.15s ease;
    }
}
</style>
