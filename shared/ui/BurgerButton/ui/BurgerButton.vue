<script setup lang="ts">
import "../style.scss"

const burgerActive = ref<boolean>(false)
</script>
<template>
    <div class="burger" :class="{ 'burger--active': burgerActive }" @click="burgerActive = !burgerActive">
        <span class="burger__line"></span>
        <span class="burger__line"></span>
        <span class="burger__line"></span>
    </div>
</template>