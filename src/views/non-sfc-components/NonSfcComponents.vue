<script setup lang="ts">
import StringTemplate from '@/components/non-sfc-components/StringTemplate';
import { RenderFunction } from '@/components/non-sfc-components/RenderFunction';
</script>

<template>
  <div class="container">
    <h1>StringTemplate</h1>
    <!-- <StringTemplate /> -->
  </div>
  <div class="container">
    <h1>RenderFunction</h1>
    <RenderFunction />
  </div>
</template>

<style scoped>
.container {
  border: 1px solid black;
  margin: 20px;
}
</style>