<script setup lang="ts">
import "../style.scss"
import MakeAppointment from "~/features/MakeAppointment";
import CloudLabel from "~/shared/ui/CloudLabel";
</script>
<template>
    <div class="bookForm section">
        <div class="container bookForm__content">
            <div class="bookForm__head">
                <h1 class="title bookForm__title">
                    Запишитесь на прием сегодня
                </h1>
                <h2 class="subtitle bookForm__subtitle">
                    Не откладывайте здоровье зубов на завтра
                </h2>
            </div>
            <MakeAppointment class="bookForm__form" />
        </div>
        <CloudLabel class="bookForm__cloudLabel">
            <template #content>
                <span class="bookForm__cloudLabelText">Подберем специалиста и удобное время для визита!</span>
            </template>
        </CloudLabel>
    </div>
</template>