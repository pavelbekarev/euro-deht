<script setup lang="ts">
import Logo from "~/shared/ui/Logo";
import "../style.scss"
import { menuConfig } from "../config/menuConfig";
import { useBurgerStore } from "~/shared/store";

defineProps<{
    linkStyle?: string;
    burgerEnabled?: boolean;
}>();

const burgerStore = useBurgerStore();
const { burgerActive } = storeToRefs(burgerStore);
</script>
<template>
    <div class="navBar">
        <Logo />
        <div class="navBar__content">
            <ul class="navBar__menu" :class="{'navBar__menu--expanded': burgerEnabled && burgerActive}">
                <NuxtLink
                    class="navBar__link" 
                    :class="linkStyle && linkStyle"
                    v-for="link in menuConfig" 
                    :to="link.to"
                >
                    {{ link.label }}
                </NuxtLink>
            </ul>
            <slot />
        </div>
    </div>
</template>