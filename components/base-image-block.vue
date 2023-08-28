<template>
  <div class="image-section">
    <img class="image-section__image" :src="data.src" :alt="data.caption">
    <p class="image-section__caption">
      {{ data.caption }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ComponentImageData } from '@/types';

defineProps<{
    data: ComponentImageData;
  }>();
</script>

<style scoped lang="scss">
  .image-section {
    &__image {
      width: 100%;
      max-height: 34rem;
      object-fit: cover;
      border-top-right-radius: 13rem;
    }

    &__caption {
      text-align: end;
      color: $gray;
    }
  }
</style>
