<script setup lang="ts">
import Info from "~/shared/ui/Info";
import { services } from "../config/services";
import "../style.scss";

</script>
<template>
    <div class="services section">
        <div class="container">
            <h1 class="title services__title">Наши услуги</h1>
            <div class="services__items">
                <div v-for="service in services" class="services__item">
                    <NuxtImg
                        :src="service.img"
                        :alt="service.title"
                        loading="lazy"
                    />
                    
                    <Info :data="{
                        title: service.title,
                        accent: `от ${priceFormatter(service.price).toString()} ₽`,
                        description: service.description
                    }" />
                </div>
            </div>
        </div>
    </div>
</template>
