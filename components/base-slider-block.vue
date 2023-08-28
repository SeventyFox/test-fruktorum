<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :pagination="{
      type: 'fraction',
    }"
    navigation
    loop
    effect="fade"
    class="slider"
  >
    <swiper-slide v-for="(slide, idx) in data" :key="idx">
      <img :src="slide" class="slider__image">
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import type { ComponentSliderData } from '@/types';

defineProps<{
    data: ComponentSliderData;
  }>();

const modules = [Navigation, Pagination, A11y, EffectFade];
</script>

<style scoped lang="scss">
  .slider {
    overflow: inherit;
    margin: 4rem 0;

    &__image {
      width: 100%;
      padding: 0 7rem;
    }
  }
</style>
