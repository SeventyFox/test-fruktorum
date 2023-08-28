<template>
  <div class="article-intro">
    <div class="article-intro__container">
      <img class="article-intro__image" :src="data.image">
      <div class="article-intro__text-wrapper">
        <h1 class="article-intro__title">
          {{ data.title }}
        </h1>
        <div class="article-intro__info">
          <div class="article-intro__wrapper">
            <img src="~/assets/icons/clock.svg" class="article-intro__icon">
            <div class="article-intro__text f-s-08">
              {{ data.readingTime }} мин. время чтения
            </div>
          </div>
          <div class="article-intro__wrapper">
            <img src="~/assets/icons/watch.svg" class="article-intro__icon">
            <div class="article-intro__text f-s-08">
              {{ data.viewsCount }} прочитали статью
            </div>
          </div>
        </div>
        <div class="article-intro__wrapper" />
        <p class="article-intro__short-text">
          {{ data.shortDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentArticleIntroData } from '@/types';

defineProps<{
    data: ComponentArticleIntroData;
  }>();
</script>

<style lang="scss" scoped>
  .article-intro {
    &__container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
      align-items: center;
      gap: 1.88rem;
    }

    &__image {
      border-top-right-radius: 13rem;
      width: 100%;
    }

    &__info {
      display: flex;
      flex-direction: column;
      color: $gray;
      gap: 0.25rem;
    }

    &__wrapper {
      display: flex;
    }

    &__text {
      margin-left: 0.5rem;
    }

    &__short-text {
      margin-top: 3rem;
    }
  }
</style>
