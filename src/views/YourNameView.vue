<script lang="ts" setup>
const { name, alreadySetName, setName, goBack } = useYourName()
</script>

<template>
  <div
    v-if="!alreadySetName"
  >
    <Input
      v-model="name"
      placeholder="What's your name?"
      @keyup.enter="setName"
    />
    <button
      :disabled="!name"
      @click="setName"
    >
      Set
    </button>
  </div>

  <div
    v-else
  >
    <h2>Hi, {{ name }}</h2>
    <button
      @click="goBack"
    >
      Back
    </button>
  </div>

  <router-link
    to="/"
  >
    Change Layout
  </router-link>
</template>
