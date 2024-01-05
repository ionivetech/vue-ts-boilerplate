<script lang="ts" setup>
const modelValue = defineModel<string>()

withDefaults(
  defineProps<{
    placeholder?: string
    type?: string
  }>(),
  {
    placeholder: '',
    type: 'text'
  }
)
</script>

<template>
  <input
    v-model="modelValue"
    :type="type"
    :placeholder="placeholder"
    class="w-[250px] rounded-md border border-gray-600 bg-transparent px-4 py-2 text-center text-white focus:outline-none"
  />
</template>
