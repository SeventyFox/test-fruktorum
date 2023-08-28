<template>
  <div class="cta-form">
    <img class="cta-form__image" src="~/assets/images/cta-girl.png">
    <div class="cta-form__wrapper">
      <h2>Стань участником проекта</h2>
      <div class="cta-form__inputs">
        <BaseInput v-model="model.name" placeholder="Имя" />
        <BaseInput v-model="model.phone" placeholder="Телефон" />
        <BaseInput v-model="model.email" placeholder="Email" />
      </div>
      <BaseButton class="subscribe-form__btn">
        Подписаться
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ComponentCtaFormData } from '@/types';

defineProps<{
    data: ComponentCtaFormData;
  }>();

const model = reactive({
  email: '',
  name: '',
  phone: '',
});
</script>

<style scoped lang="scss">
  .cta-form {
    background-color: $text;
    color: $white;
    padding: 3.75rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 3.75rem;

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      flex-shrink: 0;
    }

    &__image {
      width: 100%;
      object-fit: cover;
    }

    &__inputs {
      display: flex;
      flex-direction: column;
      max-width: 22rem;
    }
  }
</style>
