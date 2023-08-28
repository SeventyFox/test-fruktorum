<template>
  <div>
    <h2 v-if="isArticlePage">
      {{ data.title }}
    </h2>
    <div class="article-list">
      <div v-for="(article,idx) in data.articles" :key="idx" class="article-list__container">
        <img class="article-list__image" :src="article.image">
        <h3 class="article-list__title">
          {{ article.title }}
        </h3>
        <BaseButton class="article-list__button" :to="article.link">
          Читать
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentArticleListData } from '@/types';

defineProps<{
    data: ComponentArticleListData;
    isArticlePage?: boolean;
  }>();
</script>

<style lang="scss" scoped>
  .article-list {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    gap: 1.87rem;
    margin-bottom: 3.12rem;

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__image {
      max-height: 20rem;
      width: 100%;
      object-fit: cover;
    }

    &__title {
      margin-top: 1.25rem;
    }
  }
</style>
