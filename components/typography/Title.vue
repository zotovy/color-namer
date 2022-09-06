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
    font-size: min(max(6vw, 12vh), 90px);

    @media (max-width: 425px) {
        font-size: 48px;
        text-align: center;
    }
}
</style>
