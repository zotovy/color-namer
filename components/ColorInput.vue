<template>
    <input
        type="text"
        :value="modelValue"
        v-maska="{ mask: '!#HHHHHH', tokens: { 'H': { pattern: /[0-9a-fA-F]/, uppercase: true }}}"
        placeholder="#5c6ac4"
        @input="$emit('update:modelValue')"/>
</template>

<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
input {
    font-weight: 100;
    font-size: 2.5rem;
    margin-top: 0.75rem;
    border: none;
    outline: none;
    color: var(--contrast);
    background: transparent;
    display: inline-block;
    width: 12rem;

    &::placeholder {
        color: var(--contrast);
        opacity: 0.5;
    }
}
</style>
