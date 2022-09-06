<template>
    <h2>
        <slot></slot>
    </h2>
</template>

<script>
export default {
    name: "SubtitleComponent"
}
</script>

<style scoped lang='scss'>
h2 {
    font-weight: 100;
    font-size: 2.5rem;
    margin-top: 0.75rem;
}
</style>
