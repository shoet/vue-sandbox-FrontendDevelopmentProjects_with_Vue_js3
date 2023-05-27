<script setup lang="ts">
import { reactive, computed, watch } from 'vue';

const names = reactive({
  firstName: '',
  lastName: '',
})

interface Emits {
  (event: 'update:fullName', fullName: string): void;
  (evnet: 'update:count', count: number): void;
}
const emits = defineEmits<Emits>();

watch(names, () => {
  const fullName = names.firstName+names.lastName;
  emits('update:fullName', fullName);
  emits('update:count', fullName.length);
})

</script>

<template>
  <div class="language-count-view-container">
    <h2>LanguageCountView</h2>
    <input type="text" placeholder="first name" v-model="names.firstName" data-testid="input-firstName">
    <input type="text" placeholder="last name" v-model="names.lastName" data-testid="input-lastName">
  </div>
</template>

<style>
.language-count-view-container {
  border: 1px solid black;
  padding: 10px;
}
</style>