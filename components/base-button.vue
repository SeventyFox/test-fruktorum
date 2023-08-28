<template>
  <span :class="['button', isLink && 'button_link']">
    <NuxtLink v-if="isLink" class="button__inner" :to="to"><slot /></NuxtLink>
    <button v-else class="button__inner"><slot /></button>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
      to?: string;
    }>(),
  {
    to: undefined,
  }
);

const isLink = computed(() => props.to !== undefined);
</script>

<style lang="scss" scoped>
  .button {
    &__inner {
      padding: 0.62rem 3.12rem;
      background-color: $blue;
      color: $white;
      border-radius: 0.125rem;
      border: unset;
      transition: all 0.3s;
      &:hover {
        background-color: transparent;
        box-shadow: inset 0px 0px 0px 1px $blue;
      }
    }

    &_link {
      .button__inner {
        background-color: $text;
        color: $white;
        text-decoration: none;
        transition: all 0.3s;
        display: inline-block;

        &:hover {
          background-color: $blue;
        }
      }
    }
  }
</style>
