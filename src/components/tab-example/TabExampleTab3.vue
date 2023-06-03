<script setup lang="ts">
import TabExampleComponent from './TabExampleComponent.vue';
</script>

<template>
  <TabExampleComponent>
    <template v-slot:header>
      Tab3
    </template>
    <template v-slot:code>$ Tab3</template>
  </TabExampleComponent>
</template>

<style>
</style>