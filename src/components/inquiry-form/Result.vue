<script setup lang="ts">
import type { InquiryForm } from './InquiryForm.vue';

interface Props {
  data: InquiryForm;
}
const props = defineProps<Props>();

</script>

<template>
  <p>{{ data.name }}</p>
  <p>{{ data.email }}</p>
  <p>{{ data.phone }}</p>
  <p>{{ data.subject }}</p>
  <p>{{ data.message }}</p>
</template>

<style>
</style>