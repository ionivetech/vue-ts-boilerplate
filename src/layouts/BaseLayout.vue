<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <main class="min-h-screen w-full bg-slate-950">
    <div class="container flex min-h-screen w-full flex-col items-center justify-center">
      <div class="mb-8 flex flex-col items-center space-y-5">
        <img
          src="@/assets/img/vue.svg"
          alt="vue-logo"
          width="80"
          height="80"
        />
        <h1 class="text-3xl font-semibold text-slate-200">Vue TS Boilerplate</h1>
      </div>

      <component :is="route.meta.layout || 'div'">
        <router-view />
      </component>
    </div>
  </main>
</template>
