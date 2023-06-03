<script setup lang="ts">
import TabExampleComponent from './TabExampleComponent.vue';
</script>

<template>
  <TabExampleComponent>
    <template v-slot:header>
      Tab2
    </template>
    <template v-slot:code>$ Tab2</template>
  </TabExampleComponent>
</template>

<style>
</style>