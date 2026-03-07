<script setup lang="ts">
import NavBar from "~/widgets/NavBar";
import "../style.scss"
</script>
<template>
    <footer class="footer section">
        <div class="container footer__content">
            <NavBar :burger-enabled="false" class="footer__navBar" link-style="footer__text--light" />
            <div class="footer__bottom">
                <span class="footer__text footer__text--sliced">Материалы сайта не являются медицинскими рекомендациями. Для постановки диагноза и назначения лечения необходимо проконсультироваться с врачом</span>
                <div class="footer__policyInfo">
                    <div class="footer__policyInfo-links">
                        <NuxtLink class="footer__text footer__text--light footer__text--underscore" to="/">Политика конфиденциальности</NuxtLink>
                        <NuxtLink class="footer__text footer__text--light footer__text--underscore" to="/">Выписка из реестра лицензий</NuxtLink>
                    </div>
                    <div class="footer__copyrights">
                        <span class="footer__text">ООО “EuroDent”</span>
                        <span class="footer__text">Copyright 2026. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>