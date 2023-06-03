<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'normalize.css';
</script>

<template>
  <!-- <RouterLink to="/">Home</RouterLink> -->
  <!-- <RouterLink v-bind:to="{name: 'todo'}">Todo</RouterLink>
  <RouterLink v-bind:to="{name: 'layout'}">layout</RouterLink> -->
  <RouterView />
</template>

<style scoped>
</style>
