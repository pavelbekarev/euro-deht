<script setup lang="ts">
import "../style.scss"
import Button from "~/shared/ui/Button";
import ArrowUpRightIcon from "~/shared/ui/ArrowUpRightIcon";

const props = defineProps<{
    loading: boolean;
    error?: string | null;
    success?: string | null;
}>();

const emit = defineEmits<{
    (e: "submit", formData?: FormData): void;
}>();

const handleSubmit = (e: Event) => {
    if (!props.loading) {
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form)
    
        emit("submit", formData)
    }
}
</script>
<template>
    <form class="baseForm" @submit.prevent="handleSubmit">
        <div class="baseForm__content">
            <slot />
        </div>

        <div v-if="$slots.actions" class="baseForm__actions">
            <slot name="actions" />
        </div>

        <div v-if="error" class="baseForm__error">
            {{ error }}
        </div>

        <div v-if="success" class="baseForm__success">
            {{ success }}
        </div>
    </form>
</template>