<script setup lang="ts">
import "../style.scss"

import tg from "~/public/assets/tgIcon.svg"
import vk from "~/public/assets/vkIcon.svg"
import ok from "~/public/assets/okIcon.svg"
import Button from "../../Button/ui/Button.vue";
</script>
<template>
    <div class="controls">
        <div class="controls__socials">
            <a href="https://vk.com/" aria-label="ВКонтакте (откроется новая вкладка)" target="_blank">
                <img :src="vk" alt="ВКонтакте">
            </a>
            <a href="https://web.telegram.org/" aria-label="Телеграм (откроется новая вкладка)" target="_blank">
                <img :src="tg" alt="Телеграм">
            </a>
            <a href="https://ok.ru/" aria-label="Одноклассники (откроется новая вкладка)" target="_blank">
                <img :src="ok" alt="Одноклассники">
            </a>
        </div>
        <Button button-text="Записаться" :extra-classes="['controls__submitButton']" />
    </div>
</template>