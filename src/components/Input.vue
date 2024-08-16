<script lang="ts" setup>
withDefaults(
  defineProps<{
    placeholder?: string
    type?: string
  }>(),
  {
    placeholder: '',
    type: 'text',
  },
)

const modelValue = defineModel<string>()
</script>

<template>
  <input
    v-model="modelValue"
    :type="type"
    :placeholder="placeholder"
  >
</template>
