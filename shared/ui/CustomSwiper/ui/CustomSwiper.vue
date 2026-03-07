<script setup lang="ts">
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { defaultBreakpoints } from '~/shared/config/defaultBreakpoints';
import arrowLeft from "~/public/assets/swiper-arrowLeft.svg"
import arrowRight from "~/public/assets/swiper-arrowRight.svg"

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const props = defineProps<{
    slidesPerView?: number;
    spaceBetween?: number;
    autoplay?: any;
    loop?: boolean;
    speed?: number;
    slides?: any[]; // Массив данных для слайдов
    navigation?: boolean,
    breakpoints?: any
}>();

const breakpoints = props.breakpoints || defaultBreakpoints;

// Значения по умолчанию
const slidesPerView = props.slidesPerView || 3;
const spaceBetween = props.spaceBetween || 50;
const loop = props.loop ?? true;
const speed = props.speed || 1000;

const swiperInstance = ref<SwiperClass | null>(null);

// Методы для кастомной навигации
const onSwiper = (swiper: SwiperClass) => {
  swiperInstance.value = swiper;
};

const slideNext = () => {
  swiperInstance.value?.slideNext();
};

const slidePrev = () => {
  swiperInstance.value?.slidePrev();
};
</script>

<template>
    <swiper
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :modules="modules"
        :autoplay="props.autoplay"
        :loop="loop"
        :speed="speed"
        :breakpoints="breakpoints"
        @swiper="onSwiper"
    >
        <template v-if="slides && slides.length > 0">
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <!-- Используем слот для кастомизации каждого слайда -->
                <slot name="slide" :slide="slide" :index="index">
                    <!-- Дефолтное содержимое, если слот не передан -->
                    <img class="swiper__img" v-if="slide.image" :src="slide.image" alt="">
                    <div v-if="slide.title">{{ slide.title }}</div>
                </slot>
            </swiper-slide>
        </template>
        <slot name="swiper-slide-content" />

        <div v-if="navigation" class="swiper__buttonWrapper">
            <button class="swiper__button swiper__button--prev" @click="slidePrev">
                <img :src="arrowLeft" alt="">
            </button>
            <button class="swiper__button swiper__button--next" @click="slideNext">
                <img :src="arrowRight" alt="">
            </button>
        </div>
    </swiper>
</template>
<style scoped>
@import "../style.scss";

</style>