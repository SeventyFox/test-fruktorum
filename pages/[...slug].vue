<template>
  <div>
    <component
      :is="COMPONENT_TYPE_TO_COMPONENT[pageDataBodyItem.type]"
      v-for="pageDataBodyItem in pageDataBody"
      :key="pageDataBodyItem.id"
      :data="pageDataBodyItem.data"
      :is-article-page="isArticlePage"
    />
  </div>
</template>

<script setup lang="ts">
import { usePageDataStore } from '@/stores/page-data';
import { COMPONENT_TYPE, PAGE_TYPE, type PageData } from '@/types';

const COMPONENT_TYPE_TO_COMPONENT = {
  [COMPONENT_TYPE.TEXT_BLOCK]: defineAsyncComponent(() => import('@/components/base-text-block.vue')),
  [COMPONENT_TYPE.IMAGE_BLOCK]: defineAsyncComponent(() => import('@/components/base-image-block.vue')),
  [COMPONENT_TYPE.SLIDER_BLOCK]: defineAsyncComponent(() => import('@/components/base-slider-block.vue')),
  [COMPONENT_TYPE.SUBSCRIBE_FORM_BLOCK]: defineAsyncComponent(
    () => import('@/components/base-subscribe-form-block.vue')
  ),
  [COMPONENT_TYPE.CTA_FORM_BLOCK]: defineAsyncComponent(() => import('@/components/base-cta-form-block.vue')),
  [COMPONENT_TYPE.ARTICLE_LIST_BLOCK]: defineAsyncComponent(() => import('@/components/base-article-list-block.vue')),
  [COMPONENT_TYPE.ARTICLE_INTRO_BLOCK]: defineAsyncComponent(
    () => import('@/components/base-article-intro-block.vue')
  ),
};

const pageDataStore = usePageDataStore();
const pageData = ref<PageData | null>(null);
const pageDataBody = computed(() => pageData.value?.body ?? []);
const pageDataMetaTitle = computed(() => pageData.value?.meta.title ?? 'Default title');
const pageDataMetaDescription = computed(() => pageData.value?.meta.description ?? 'Default description');
const isArticlePage = computed(() => pageData.value?.pageType === PAGE_TYPE.ARTICLE);

useSeoMeta({
  title: () => pageDataMetaTitle.value,
  description: () => pageDataMetaDescription.value,
});

pageDataStore
  .fetchPageData()
  .then((_pageData) => {
    pageData.value = _pageData;
  })
  .catch((error) => {
    pageData.value = null;
    console.error(error);
    // например, редирект на 404
  });
</script>
