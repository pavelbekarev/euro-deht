<script setup lang="ts">
import "../style.scss"
defineProps<{
    buttonText?: string,
    extraClasses?: string[]
}>()
</script>
<template>
    <button class="button" :class="extraClasses && extraClasses.join(' ')">
        {{ buttonText && buttonText }}
        <slot name="buttonIcon" />
    </button>
</template>