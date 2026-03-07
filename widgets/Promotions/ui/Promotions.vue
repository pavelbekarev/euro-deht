<script setup lang="ts">
import Info from "~/shared/ui/Info";
import "../style.scss"
import card1 from "~/public/assets/promotions__card1.jpg"
import card2 from "~/public/assets/promotions__card2.jpg"
import card3 from "~/public/assets/promotions__card3.jpg"
import arrow from "~/public/assets/arrowIcon.svg"
import CircleArrowButton from "~/shared/ui/CircleArrowButton";
import { promotionsConfig } from "../config/promotions";
import Button from "~/shared/ui/Button";

const morePromotions = ref<boolean>(false)
const showMorePromotions = () => morePromotions.value = !morePromotions.value

const displayedPromotions = computed(() => {
    if (morePromotions.value) {
        return promotionsConfig;
    } else {
        return promotionsConfig.slice(0, 3)
    }
})
</script>
<template>
    <div class="promotions section">
        <div class="container">
            <h1 class="title promotions__title">
                Наши акции
            </h1>
                <TransitionGroup name="fade" tag="div" class="promotions__content">
                    <div class="promotions__card" v-for="(item, key) in displayedPromotions" :key="key">
                        <img class="promotions__img" :src="item.image" alt="">
                        <Info class="promotions__info" :data="{
                            title: item.title,
                            description: item.date}
                        " />
                        <CircleArrowButton class="promotions__button" />
                    </div>
                </TransitionGroup>
            <Button 
                @click="showMorePromotions" 
                class="promotions__morePromotions title" 
                :button-text="morePromotions ? 'Скрыть' : 'Больше акций'" 
            />
        </div>
    </div>
</template>