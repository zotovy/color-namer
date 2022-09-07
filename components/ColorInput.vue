<template>
    <input
        v-maska="{ mask: '!#HHHHHH', tokens: { 'H': { pattern: /[0-9a-fA-F]/, uppercase: true }}}"
        type="text"
        :value="modelValue"
        :placeholder="placeholder ?? '#5c6ac4'"
        @blur="$emit('submit')"
        @keyup.enter="$emit('submit')"
        @input="handleInput"/>
</template>

<script setup lang="ts">

defineProps({
    modelValue: {type: String, required: true},
    placeholder: {type: String, default: "#5c6ac4"}
})

const emit = defineEmits(["submit", "update:modelValue"])

const handleInput = (e: Event) => {
    emit("update:modelValue", (e.target as HTMLInputElement).value)
}

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
        color: rgba(var(--contrast), 0.5);
    }

    @media (max-width: 425px) {
        margin-top: 30px;
        text-align: center;
    }
}
</style>
