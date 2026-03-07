<script setup lang="ts">
import BaseForm from "~/shared/ui/BaseForm";
import "../style.scss"
import { useMakeAppointment } from "../model/useMakeAppointment";
import Button from "~/shared/ui/Button";
import ArrowUpRightIcon from "~/shared/ui/ArrowUpRightIcon";
import BaseField from "~/shared/ui/BaseField";

const { 
    error, 
    handleSubmit,
    loading, 
    reset, 
    success, 
    formData 
} = useMakeAppointment()
</script>
<template>
    <BaseForm
        :loading="loading"
        :error="error"
        :success="success"
        @submit="handleSubmit"
        class="makeAppointment"
    >
        <div class="makeAppointment__fields">
            <div class="makeAppointment__field">
                <input class="makeAppointment__field-item" type="text" placeholder="Ваше имя" v-model="formData.name">
            </div>
            <div class="makeAppointment__field">
                <input class="makeAppointment__field-item" type="text" placeholder="+7 (___) ___-__-__" v-model="formData.phone">
            </div>
            <div class="makeAppointment__field makeAppointment__field--inline">
                <input 
                    id="agreePolicy" 
                    class="makeAppointment__field-item makeAppointment__field-item--checkbox" 
                    type="checkbox" 
                    v-model="formData.agreePolicy"
                >
                <label 
                    class="makeAppointment__field-label" 
                    for="agreePolicy"
                >
                    Согласен с <span class="makeAppointment__field-label--underscore">политикой конфиденциальности</span>
                </label>
            </div>
        </div>

        <template #actions>
            <Button 
                type="submit"
                :extra-classes="['makeAppointment__bookButton']"
                button-text="Записаться на приём"
            >
                <template #buttonIcon>
                    <ArrowUpRightIcon />
                </template>
            </Button>
        </template>
    </BaseForm>
</template>