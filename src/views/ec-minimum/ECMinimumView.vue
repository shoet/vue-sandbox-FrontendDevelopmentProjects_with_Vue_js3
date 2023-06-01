<script setup lang="ts">
import { ref, provide } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink v-bind:to="{ name: 'about' }">About</RouterLink>
        </li>
      </ul>
    </nav>
    <h1>EC Home</h1>
  </header>
  <RouterView/>
</template>
<style>
</style>