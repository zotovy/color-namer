<template>
    <h1>
        <slot></slot>
    </h1>
</template>

<script>
export default {
    name: "TitleComponent"
}
</script>

<style scoped lang='scss'>
h1 {
    font-weight: 700;
    font-size: 6rem;
}
</style>
