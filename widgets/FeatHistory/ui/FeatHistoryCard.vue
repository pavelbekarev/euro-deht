<script setup lang="ts">
import "../style.scss"
import arrow from "~/public/assets/arrowIcon.svg"
import Button from "~/shared/ui/Button";
import CircleArrowButton from "~/shared/ui/CircleArrowButton";

defineProps<{
    history: any;
    isVisible: number | null;
}>();

const emit = defineEmits<{
    (e: "showDetails", id: number): void;
}>();

</script>
<template>
    <div class="featHistory__card":key="history.id">
        <img class="featHistory__img" :src="history.image" alt="">
        <div class="featHistory__case">
            <h2 class="subtitle featHistory__text-heading">{{ history.title }}</h2>
            <div 
                class="featHistory__case-details"
                :class="{
                    'featHistory__case-details--visible': isVisible ===  history.id
                }"
            >
                <div class="featHistory__box" v-for="i in history.boxContent">
                    <span class="subtitle featHistory__text-subtitle">{{ i.subtitle }}</span>
                    <span class="featHistory__text-answer">{{ i.answer }}</span>
                </div>
                <Button class="featHistory__showFeedbackForm" button-text="Хочу также" />
            </div>
            <!-- <button 
                class="featHistory__showDetailsButton" 
                @click="emit('showDetails', history.id)"
                :class="{'featHistory__showDetailsButton--visible': isVisible ===  history.id}"
            >
                <img :src="arrow" alt="Кнопка открыть подробнее">
            </button> -->
            <CircleArrowButton 
                class="featHistory__showDetailsButton"
                :class="{'featHistory__showDetailsButton--visible': isVisible ===  history.id}" 
                @click="emit('showDetails', history.id)" 
            />
        </div>
    </div>
</template>