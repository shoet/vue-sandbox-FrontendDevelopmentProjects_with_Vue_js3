<script setup lang="ts">
</script>

<template>
  <div class="slot-container">
    <h2>component title</h2>
    <slot name="slot-component"/>
  </div>
</template>

<style scoped>
.slot-container {
  border: 1px solid black;
}
</style>