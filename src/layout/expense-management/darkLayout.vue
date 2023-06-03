<script setup lang="ts">
</script>

<template>
  <div class="dark-layout-container">
    <slot class="dark-layout-container__inner"/>
  </div>
</template>

<style scoped>
.dark-layout-container {
  background-color: black;
  color: white;
  height: 100vh;
}
</style>