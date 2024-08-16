<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <main>
    <component :is="route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>
