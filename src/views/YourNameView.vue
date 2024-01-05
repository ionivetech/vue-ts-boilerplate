<script lang="ts" setup>
const { name, alreadySetName, setName, goBack } = useYourName()
</script>

<template>
  <div
    v-if="!alreadySetName"
    class="flex flex-col items-center space-y-4"
  >
    <Input
      v-model="name"
      placeholder="What's your name?"
      @keyup.enter="setName"
    />
    <button
      class="w-min rounded-md bg-blue-600 px-4 py-1 text-white transition-colors duration-200 ease-in-out hover:bg-blue-700 disabled:opacity-60"
      :disabled="!name"
      @click="setName"
    >
      Set
    </button>
  </div>

  <div
    v-else
    class="flex flex-col items-center space-y-4"
  >
    <h2 class="text-2xl text-slate-200">Hi, {{ name }}</h2>
    <button
      class="w-min rounded-md bg-blue-600 px-4 py-1 text-white transition-colors duration-200 ease-in-out hover:bg-blue-700"
      @click="goBack"
    >
      Back
    </button>
  </div>

  <router-link
    to="/"
    class="mt-8 text-center text-sm text-slate-200 underline"
  >
    Change Layout
  </router-link>
</template>
