<template>
    <button class="button" :class="extraClasses && extraClasses.join(' ')">
        {{ buttonText && buttonText }}
        <slot name="buttonIcon" />
    </button>
</template>
<script setup lang="ts">
defineProps<{
    buttonText?: string,
    extraClasses?: string[]
}>()
</script>
<style scoped>
@import "../style.scss";
</style>