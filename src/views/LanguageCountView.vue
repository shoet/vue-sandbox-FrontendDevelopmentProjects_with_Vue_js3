<script setup lang="ts">
import { ref, reactive } from 'vue';

import LanguageCountInputField from '@/components/LanguageCountInputField.vue';

const output = ref({
  fullName: '',
  count: 0
});

</script>

<template>
  <h1>LanguageCountView</h1>
  <LanguageCountInputField
    v-model:fullName="output.fullName"
    v-model:count="output.count"/>
  <div class="result-container">
    <p>fullName: {{ output.fullName }}</p>
    <p>count: {{ output.count }}</p>
  </div>
</template>

<style>
.result-container {
  border: 1px solid black;
}
</style>