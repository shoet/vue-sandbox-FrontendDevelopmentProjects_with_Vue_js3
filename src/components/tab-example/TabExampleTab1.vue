<script setup lang="ts">
import TabExampleComponent from './TabExampleComponent.vue';
</script>

<template>
  <TabExampleComponent>
    <template v-slot:header>
      Tab1
    </template>
    <template v-slot:code>$ Tab1</template>
  </TabExampleComponent>
</template>

<style>
</style>