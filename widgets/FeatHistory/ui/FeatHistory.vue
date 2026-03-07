<script setup lang="ts">
import "../style.scss";
import FeatHistoryCard from "./FeatHistoryCard.vue";
import { useFeatHistory } from "../model/useFeatHistory";

const { isVisible, histories, showDetails } = useFeatHistory();
</script>
<template>
    <div class="featHistory section">
        <div class="container">
            <h1 class="title featHistory__title">Истории спасения зубов</h1>
            <div class="featHistory__content">
                <FeatHistoryCard
                    class="featHistory__card"
                    v-for="history in histories"
                    :history="history"
                    :is-visible="isVisible"
                    @show-details="showDetails"
                />
            </div>
        </div>
    </div>
</template>