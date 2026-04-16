<script setup lang="ts">
import "../style.scss"
import reviewBar from "~/public/assets/reviewBar.jpg"
import reviewYa from "~/public/assets/yandexReview--mobile.png"
import reviewCard1 from "~/public/assets/reviewCard1.jpg"
import { defaultBreakpoints } from "~/shared/config/defaultBreakpoints";
import CustomSwiper from "~/shared/ui/CustomSwiper";

const slides = [
    { image: reviewCard1 },
    { image: reviewCard1 },
    { image: reviewCard1 },
    { image: reviewCard1 },
    { image: reviewCard1 },
];

const windowWidth = ref(0);

const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});

const reviewDataFromBreakpoints = computed(() => {
    // Сортируем брейкпоинты по возрастанию
    const breakpoints = Object.keys(defaultBreakpoints)
        .map(Number)
        .sort((a, b) => a - b);
    
    // Находим подходящий брейкпоинт
    let currentBreakpoint = breakpoints[0];
    for (const bp of breakpoints) {
        if (windowWidth.value >= bp) {
            currentBreakpoint = bp;
        }
    }
    
    return {
        reviewImage: currentBreakpoint! >= 768 ? reviewBar : reviewYa,
        swiperPagination: currentBreakpoint! <= 768,
    };
});
</script>
<template>
    <div class="reviews section">
        <div class="container">
            <h1 class="title reviews__title">Отзывы и независимые рейтинги</h1>
            <div class="reviews__content">
                <div class="reviews__review">
                    <img class="reviews__img" :src="reviewDataFromBreakpoints.reviewImage" alt="Оценка в Яндексе">
                </div>
                
                <CustomSwiper 
                    :slides="slides"
                    :autoplay="{
                        delay: 800,    
                        disableOnInteraction: false, 
                        pauseOnMouseEnter: true,   
                        stopOnLastSlide: false,   
                        reverseDirection: false,
                    }"
                    :loop="true"
                    :navigation="reviewDataFromBreakpoints.swiperPagination"
                >
                    <!-- Кастомизация слайда через слот -->
                    <template #slide="{ slide }">
                        <img class="reviews__img" :src="slide.image" alt="Отзыв">
                    </template>
                </CustomSwiper>
            </div>
        </div>
    </div>
</template>
