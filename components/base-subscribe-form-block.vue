<template>
  <div class="subscribe-form">
    <h3 class="f-w-800">
      Подпишись на рассылку
    </h3>
    <div class="subscribe-form__wrapper">
      <BaseInput v-model="model.email" placeholder="Email" />
      <BaseButton class="subscribe-form__btn">
        Подписаться
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ComponentSubscribeFormData } from '@/types';
import BaseInput from '@/components/base-input/base-input.vue';

withDefaults(
  defineProps<{
      data?: ComponentSubscribeFormData;
    }>(),
  {
    data: undefined,
  }
);

const model = reactive({
  email: '',
  name: '',
  phone: '',
});

</script>

<style scoped lang="scss">
  .subscribe-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $text;
    color: $white;
    padding: 1.69rem 1.87rem;

    &__wrapper {
      display: flex;
    }

    &__btn {
      margin-left: 2.3rem;
    }
  }
</style>
