<script setup lang="ts">
defineProps<{
    data: {
        title: string;
        accent?: string;
        description?: string
    }
}>()
</script>
<template>
    <div class="info">
        <span class="info__text info__text-title">{{ data.title }}</span>
        <span v-if="data.accent" class="info__text info__text--accent">
            {{ data.accent }}
        </span>
        <span v-if="data.description" class="info__text info__text-description">{{ data.description }}</span>
    </div>
</template>
<style scoped>
@import "../style.scss";
</style>