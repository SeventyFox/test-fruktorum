<template>
  <div class="text-block">
    <span v-html="data" />
  </div>
</template>

<script setup lang="ts">
import type { ComponentTextData } from '@/types';

defineProps<{
    data: ComponentTextData;
  }>();
</script>

<style scoped lang="scss">
  .text-block {
    margin: 10% 20%;
  }
</style>
