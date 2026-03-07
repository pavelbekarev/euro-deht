<script setup lang="ts">
import "../style.scss";
import arrow from "~/public/assets/arrowIcon.svg"
</script>
<template>
    <button class="circleArrowButton">
        <img :src="arrow" alt="Кнопка открыть подробнее">
    </button>
</template>