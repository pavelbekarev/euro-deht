<script setup lang="ts">
import "../style.scss"
import Button from "~/shared/ui/Button";
import ArrowUpRightIcon from "~/shared/ui/ArrowUpRightIcon";
</script>
<template>
    <div class="promotionBanner section">
        <div class="container promotionBanner__content">
            <div class="promotionBanner__label">
                До 28 февраля
            </div>
            <h1 class="title promotionBanner__title">
                Консультация стоматолога и создание плана лечения за 
            </h1>
            <div class="promotionBanner__promotion">
                <span class="promotionBanner__text promotionBanner__text--large">1100 ₽</span>
                <span class="promotionBanner__text">вместо 2000 ₽</span>
            </div>
            <Button 
                button-text="Записаться"
                :extra-classes="['promotionBanner__bookButton']"
            >
                <template #buttonIcon>
                    <ArrowUpRightIcon />
                </template>
            </Button>
        </div>
    </div>
</template>