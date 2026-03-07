<script setup lang="ts">
import "../style.scss"
import tg from "~/public/assets/tgIcon--light.svg"
import vk from "~/public/assets/vkIcon--light.svg"
import ok from "~/public/assets/okIcon--light.svg"
</script>
<template>
    <div class="contacts section">
        <div class="container">
            <h1 class="title contacts__title">Контакты</h1>
            <div class="contacts__content">
                <div class="contacts__items">
                    <div class="contacts__item">
                        <p class="contacts__item-text contacts__item-text--dark contacts__item-text--upper">
                            Ул. Герасименко 1/6
                        </p>
                        <p class="contacts__item-text contacts__item-text--light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                            <a class="contacts__item-text contacts__item-text--link" href="tel:8 (3822) 48-14-60">8 (3822) 97-51-20</a>
                        </p>
                    </div>

                    <div class="contacts__item">
                        <p class="contacts__item-text contacts__item-text--dark contacts__item-text--upper">
                            Ул. Киевская
                        </p>
                        <p class="contacts__item-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                            <a class="contacts__item-text contacts__item-text--link" href="tel:8 (3822) 48-14-60">8 (3822) 48-14-60</a>
                        </p>
                    </div>

                    <div class="contacts__item">
                        <p class="contacts__item-text contacts__item-text--dark contacts__item-text--medium">
                            Ежедневно с 8:00 до 20:00
                        </p>
                    </div>
                    <div class="contacts__socials">
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
                </div>
                <div class="contacts__map"></div>
            </div>
        </div>
    </div>
</template>