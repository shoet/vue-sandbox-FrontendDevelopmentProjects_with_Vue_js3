<script setup lang="ts">
</script>

<template>
  <div class="light-layout-container">
    <slot class="light-layout-container__inner"/>
  </div>
</template>

<style scoped>
.light-layout-container {
  background-color: white;
  color: black;
  height: 100vh;
}
</style>