<script setup lang="ts">
import "../style.scss"
import NavBar from "~/widgets/NavBar";

import ArrowUpRightIcon from "~/shared/ui/ArrowUpRightIcon";
import Button from "~/shared/ui/Button";
import CloudLabel from "~/shared/ui/CloudLabel";
import Controls from "~/shared/ui/Controls";
import BurgerButton from "~/shared/ui/BurgerButton";
import { useBurgerStore } from "~/shared/store";

const burgerStore = useBurgerStore();
const { burgerActive } = storeToRefs(burgerStore);
const { toggleBurger } = burgerStore;
</script>
<template>
    <header class="header section">
        <div class="container">
            <NavBar :burger-enabled="true">
                <Controls />
                <BurgerButton @click="toggleBurger" />
            </NavBar>
            <div class="header__content">
                <h2 class="subtitle subtitle--black40">Евродент</h2>
                <h1 class="title title--large header__title">
                    <span class="header__title--accent">20 лет</span> спасаем зубы, которые другие удаляют
                </h1>
                <div class="employeePortrets">
                    <NuxtImg src="assets/portret1.jpg" class="employeePortrets__portret" />
                    <NuxtImg src="assets/portret2.jpg" class="employeePortrets__portret" />
                    <NuxtImg src="assets/portret3.jpg" class="employeePortrets__portret" />
                    <NuxtImg src="assets/portret4.jpg" class="employeePortrets__portret" />

                    <button class="employeePortrets__portret employeePortrets__portret--button">+21</button>
                </div>
                <h2 class="subtitle subtitle--black70 header__subtitle">Команда стоматологов с 25-летним стажем для сложных случаев</h2>
                <Button button-text="Записаться на приём" :extra-classes="['header__bookButton']">
                    <template #buttonIcon>
                        <ArrowUpRightIcon />
                    </template>
                </Button>
            </div>

            <Button :extra-classes="['phoneCall']">
                <template #buttonIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                </template>
            </Button>

            <CloudLabel class="ratingLabelWrapper">
                <template #content>
                    <div class="ratingLabel">
                        <NuxtImg src="assets/yandexMaps.jpg" class="ratingLabel__img" />
                        <span class="ratingLabel__title">4,9 из 5 баллов</span>
                        <span class="ratingLabel__subtitle">Оценка клиники на Яндекс.Картах</span>
                    </div>
                </template>
            </CloudLabel>
        </div>
    </header>
</template>