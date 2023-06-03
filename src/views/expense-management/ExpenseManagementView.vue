<script setup lang="ts">
import { RouterView } from 'vue-router';

import { computed } from 'vue';
import { useConfigStore } from '@/stores/expense-management/configStore';
import lightLayout from '@/layout/expense-management/lightLayout.vue';
import darkLayout from '@/layout/expense-management/darkLayout.vue';
const configStore = useConfigStore();
const currentLayout = computed(() => {
  return configStore.layoutModeColor == "light" ? lightLayout : darkLayout;
})

</script>

<template>
  <component v-bind:is="currentLayout">
    <RouterView/>
  </component>
</template>

<style>
</style>