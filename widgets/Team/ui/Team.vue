<script setup lang="ts">
import { employees } from "~/entities/Employee";
import "../style.scss";
import Info from "~/shared/ui/Info";
import CloudLabel from "~/shared/ui/CloudLabel";
import CustomSwiper from "~/shared/ui/CustomSwiper/ui/CustomSwiper.vue";
import { SwiperSlide } from "swiper/vue";

const useSwiper = ref(false)

const checkWidth = () => {
  useSwiper.value = window.innerWidth <= 760;
}

onMounted(() => {
  checkWidth()
  
  // Используем throttle для оптимизации
  let timeout: any | null = null;
  const throttledCheck = () => {
    if (timeout) return
    timeout = setTimeout(() => {
      checkWidth()
      timeout = null
    }, 100)
  }
  
  window.addEventListener('resize', throttledCheck)
  
  onUnmounted(() => {
    window.removeEventListener('resize', throttledCheck)
    if (timeout) clearTimeout(timeout)
  })
})
</script>
<template>
    <div class="team section">
        <div class="container">
            <div class="team__head">
                <h1 class="title team__title">Команда спасателей зубов</h1>
                <h2 class="subtitle team__subtitle">
                    Стоматология «ЕвроДент» — это команда виртуозных стоматологов со стажем 25+ лет. Мы ежедневно спасаем десятки зубов, которые другие удаляют.
                </h2>
            </div>
            <div class="team__staff">
                <CustomSwiper 
                    v-if="useSwiper" 
                    :autoplay="false"
                    :loop="true"
                    :slides-per-view="2"
                    :space-between="5"
                >
                    <template #swiper-slide-content >
                        <swiper-slide v-for="(employee, key) in employees" :key="employee.id">
                            <div class="team__card">
                                <img :src="employee.employeeImage" alt="Портрет сотрудника">
                                <Info :data="{
                                    title: `${employee.lastname} ${employee.firstname} ${employee.middlename}`,
                                    accent: `Стаж ${employee.workExperience.toString()} лет`,
                                    description: employee.position
                                }" />
                            </div>
                        </swiper-slide>
                    </template>
                </CustomSwiper>

                <div v-else v-for="employee in employees" class="team__card">
                    <NuxtImg 
                        :quality="80" 
                        :src="employee.employeeImage" 
                        :alt="`${employee.lastname} ${employee.firstname}`" 
                        loading="lazy"
                    />
                    <Info :data="{
                        title: `${employee.lastname} ${employee.firstname} ${employee.middlename}`,
                        accent: `Стаж ${employee.workExperience.toString()} лет`,
                        description: employee.position
                    }" />
                </div>
            </div>
        </div>
        <CloudLabel class="team__cloudLabel">
            <template #content>
                <span class="team__cloudLabelText">Лечим так, как мы бы хотели, чтобы лечили нас</span>
            </template>
        </CloudLabel>
    </div>
</template>