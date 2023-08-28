<template>
  <input
    v-model="model"
    class="input"
    :placeholder="placeholder"
    :type="computedType"
  >
</template>

<script setup lang="ts">
import { TYPE } from '@/components/base-input/types';

const props = withDefaults(
  defineProps<{
      modelValue: string | null;
      type?: TYPE;
      placeholder?: string;
    }>(),
  {
    type: TYPE.TEXT,
    placeholder: undefined,
  }
);

const computedType = computed<string>(() => {
  switch (props.type) {
    case TYPE.TEXT:
    case TYPE.PHONE:
    default:
      return 'text';
  }
});

const emit = defineEmits<{
    'update:modelValue': [value: string];
    focus: [event: FocusEvent];
  }>();

const model = computed({
  get: () => {
    return String(props.modelValue ?? '');
  },
  set: value => emit('update:modelValue', value),
});
</script>

<style scoped lang="scss">
  .input {
    border-bottom: 1px solid $gray;
    color: $white;
    transition: all 0.3s;
    padding: 1rem 1rem 0.2rem 0.5rem;

    &:focus-visible {
      outline: unset;
      border-color: $blue;
    }

    &:focus::placeholder {
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
    }
  }
</style>
