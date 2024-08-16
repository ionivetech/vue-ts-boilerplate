<script setup lang="ts">
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <div>
      {{ counterStore.count }}
    </div>
    <div>
      <button
        @click="counterStore.decrement"
      >
        -
      </button>
      <button
        @click="counterStore.increment"
      >
        +
      </button>
    </div>
  </div>

  <router-link
    to="/about"
  >
    Change Layout
  </router-link>
</template>
