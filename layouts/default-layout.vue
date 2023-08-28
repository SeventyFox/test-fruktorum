<template>
  <div class="layout">
    <header class="layout__header">
      <img class="layout__header-image" src="~/assets/icons/logo.svg">
    </header>
    <main class="layout__main">
      <slot />
    </main>
    <footer class="layout__footer">
      <div class="layout__footer-container">
        <div class="layout__footer-description">
          <div class="layout__footer-info">
            <img class="layout__footer-image" src="~/assets/icons/logo.svg">
            <p class="layout__footer-text f-s-08">
              Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая
              мир эстетики и креативности
            </p>
          </div>
          <div class="layout__footer-social">
            <div class="layout__footer-email-label f-s-08">
              email
            </div>
            <div class="layout__footer-email">
              testblogsupport@gmail.com
            </div>
            <div class="layout__footer-social-icons">
              <img
                v-for="(socialIcon, idx) in SOCIAL_ICONS"
                :key="idx"
                :src="socialIcon"
                class="layout__footer-social-icon"
              >
            </div>
          </div>
        </div>
        <BaseSubscribeFormBlock />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import BaseSubscribeFormBlock from '@/components/base-subscribe-form-block.vue';

const glob = import.meta.glob('~/assets/icons/social/*', {
  eager: true,
});

const getImageAbsolutePath = (imageName: string): string => {
  return (glob[`/assets/icons/social/${imageName}`] as { default: string }).default;
};

const SOCIAL_ICONS = [
  getImageAbsolutePath('facebook.svg'),
  getImageAbsolutePath('vk.svg'),
  getImageAbsolutePath('instagram.svg'),
  getImageAbsolutePath('telegram.svg'),
];
</script>

<style scoped lang="scss">
  .layout {
    overflow: hidden;

    &__header {
      padding: 1.75rem 0;
      text-align: center;
    }

    &__main {
      max-width: 1340px;
      margin: 0 auto 3rem;
    }

    &__footer {
      border-top: 1px solid $gray;
      padding: 3rem 0 0;
    }

    &__footer-container {
      max-width: 1340px;
      margin: 0 auto;
    }

    &__footer-description {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4rem;
    }

    &__footer-social-icons {
      display: flex;
      gap: 1.25rem;
      margin-top: 1.25rem;
    }

    &__footer-text {
      color: $gray;
      max-width: 26rem;
    }
    &__footer-email-label {
      color: $gray;
    }
  }
</style>
