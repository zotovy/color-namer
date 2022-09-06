<template>
    <main class="color-container" :style="{ '--bg': color.hex, '--contrast': contrast }">
        <div class="content">
            <TitleComponent>{{ color.name }}</TitleComponent>
            <ColorInput v-model="colorInput"/>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import TitleComponent from "~/components/typography/Title";
import ColorInput from "~/components/ColorInput.vue";

const colorInput = ref("#5c6ac4");

const color: Color = {
    name: "Indigo",
    hex: "#5c6ac4",
}

const contrast = "white"

</script>

<style lang="scss" scoped>
.color-container {
    height: 100vh;
    width: 100vw;
    position: static;
    padding: 3.5rem 4rem;
    background-color: var(--bg);
    cursor: pointer;

    .content {
        max-width: 40%;
        color: var(--contrast);
    }
}
</style>
