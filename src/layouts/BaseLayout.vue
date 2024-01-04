<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <main class="min-h-screen w-full bg-slate-950">
    <component :is="route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>
