<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  name: string;
  value: string;
}
const props = defineProps<Props>();


interface Emits {
  (event: 'update:value', value: string): void;
}
const emits = defineEmits<Emits>();

const onChange = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  emits('update:value', input.value);
}

</script>

<template>
  <div class="input-field-container">
    <label data-testid="input-label">{{ name }}</label>
    <input data-testid="input-value" type="text" v-bind:value="value" v-on:input="onChange" v-bind:placeholder="name">
  </div>
</template>

<style scoped>
</style>