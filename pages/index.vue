<script setup lang="ts">
import  PromotionBanner from "~/widgets/PromotionBanner";
import "../styles/main.scss"
import Header from "~/widgets/Header";
import Services from "~/widgets/Services";
import Team from "~/widgets/Team";
import FeatHistory from "~/widgets/FeatHistory";
import Promotions from "~/widgets/Promotions";
import Reviews from "~/widgets/Reviews";
import WhyUs from "~/widgets/WhyUs";
import BookForm from "~/widgets/BookForm";
import Contacts from "~/widgets/Contacts";
import Footer from "~/widgets/Footer";

useHead({
  title: 'Медицинский центр | Euro Deht',
  meta: [
    { name: 'description', content: 'Лечение зубов без боли. Имплантация, отбеливание, протезирование. Запишитесь на бесплатную консультацию!' },
    { property: 'og:title', content: 'Стоматология в Москве' }
  ],
  bodyAttrs: {
    class: 'home-page'
  }
})
</script>
<template>
    <Header />
    <main>
        <PromotionBanner />
        <Services />
        <Team />
        <FeatHistory />
        <Promotions />
        <Reviews />
        <WhyUs />
        <BookForm />
        <Contacts /> 
    </main>
    <Footer />
</template>
<style scoped lang="scss">
.main {
    height: auto;
}
</style>