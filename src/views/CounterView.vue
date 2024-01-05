<script setup lang="ts">
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <div class="mb-4 text-center text-3xl font-semibold text-slate-200">
      {{ counterStore.count }}
    </div>
    <div class="flex items-center space-x-3">
      <button
        class="flex h-8 w-8 items-center justify-center rounded bg-slate-400/30 text-lg font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-slate-500/30"
        @click="counterStore.decrement"
      >
        -
      </button>
      <button
        class="flex h-8 w-8 items-center justify-center rounded bg-slate-400/30 text-lg font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-slate-500/30"
        @click="counterStore.increment"
      >
        +
      </button>
    </div>
  </div>

  <router-link
    to="/about"
    class="mt-8 text-center text-sm text-slate-200 underline"
  >
    Change Layout
  </router-link>
</template>
