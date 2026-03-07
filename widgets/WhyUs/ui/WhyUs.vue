<script setup lang="ts">
import "../style.scss"

import adv1 from "~/public/assets/adv1.svg"
import adv2 from "~/public/assets/adv2.svg"
import adv3 from "~/public/assets/adv3.svg"

import card1 from "~/public/assets/whyUs__card1.jpg"
import card2 from "~/public/assets/whyUs__card2.jpg"
import card3 from "~/public/assets/whyUs__card3.jpg"

import videoImage from "~/public/assets/videoImage.jpg"
import playIcon from "~/public/assets/playIcon.svg"
import CustomSwiper from "~/shared/ui/CustomSwiper"

const slides = [
    {image: card1},
    {image: card2},
    {image: card3},
    {image: card1},
    {image: card3},
    {image: card3},
];
</script>
<template>
    <div class="whyUs section">
        <div class="container">
            <h1 class="title whyUs__title">Почему выбирают нас?</h1>
            <h2 class="subtitle whyUs__subtitle">
                <span class="whyUs__subtitle--accent">Пожизненная гарантия</span> при выполнении всех рекомендаций врача, регулярной профессиональной гигиене зубов, ежегодном плановом осмотре у стоматолога
            </h2>
            <div class="whyUs__advantages">
                <div class="whyUs__advantages-item">
                    <img class="whyUs__advantages-item-img" :src="adv1" alt="Первое преимущество">
                    <span class="whyUs__advantages-item-text">
                        Честные цены на лечение. Отсутствуют скрытые платежи
                    </span>
                </div>
                <div class="whyUs__advantages-item">
                    <img class="whyUs__advantages-item-img" :src="adv2" alt="Второе преимущество">
                    <span class="whyUs__advantages-item-text">
                        Рассрочка платежа
                    </span>
                </div>
                <div class="whyUs__advantages-item">
                    <img class="whyUs__advantages-item-img" :src="adv3" alt="Третье преимущество">
                    <span class="whyUs__advantages-item-text">
                        Нас рекомендуют 94% пациентов
                    </span>
                </div>
            </div>
            
            <div class="whyUs__videoPlay">
                <img class="whyUs__videoPlay-videoImage" :src="videoImage" alt="Картинка видео">
                <img class="whyUs__videoPlay-playIcon" :src="playIcon" alt="Кнопка воспроизвести видео">
            </div>

            <div class="whyUs__swiper">
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
                    :navigation="true"
                />
            </div>
        </div>
    </div>
</template>