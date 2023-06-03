<script setup lang="ts">
import { useConfigStore } from '@/stores/expense-management/configStore';

const configStore = useConfigStore();

const toggleLayoutColor = (): void => {
  configStore.toggleLayoutModeColor();
}

</script>

<template>
  <button v-on:click="toggleLayoutColor">ToggleColor</button>
</template>

<style>
</style>