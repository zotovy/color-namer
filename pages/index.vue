<template>
    <Head>
        <Title>Generate color name</Title>
    </Head>
    <main
        class="color-container"
        :style="{ '--bg': color.hex, '--contrast': contrast }"
        @click="handleClick">
        <div class="content">
            <TitleComponent>{{ color.name }}</TitleComponent>
            <ColorInput v-model="colorInput" @submit="fetchColor"/>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useAsyncData } from "#app";
import { ref } from "@vue/reactivity";
import { computed } from "#imports";
import { changeFavicon, useColorStore } from "~/stores/color";
import TitleComponent from "~/components/typography/Title";
import ColorInput from "~/components/ColorInput.vue";

const colorInput = ref("#5c6ac4");

const color = useColorStore()

useAsyncData(async () => {
    if (process.server) {
        await color.fetchRandom();
    } else {
        changeFavicon(color);
    }
});

color.$onAction(({name, after}) => {
    after((_) => {
        if (name === "fetch") {
            colorInput.value = color.hex.toUpperCase()
            if (process.client) {
                changeFavicon(color)
            }
        }
    })
})

const contrast = computed(() => {
    const [r, g, b] = color.rgb
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return luma > 128 ? "#000" : "#fff"
})

const fetchColor = () => {
    color.fetch(colorInput.value);
}

const handleClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).nodeName === "INPUT") return

    if (colorInput.value !== color.hex.toUpperCase()) fetchColor()
    else color.fetchRandom()
}

</script>

<style lang="scss" scoped>
.color-container {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    position: static;
    padding: 3.5rem 4rem;
    background-color: var(--bg);
    cursor: pointer;
    transition: 0.15s ease;
    overflow: auto;

    .content {
        max-width: 40%;
        color: var(--contrast);
        transition: 0.15s ease;

        @media (max-width: 425px) {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>
