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
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 30px;
}
</style>
