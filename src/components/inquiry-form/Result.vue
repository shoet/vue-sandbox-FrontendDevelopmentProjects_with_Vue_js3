<script setup lang="ts">
import { computed } from 'vue';
import type { InquiryForm } from './InquiryForm.vue';

interface Props {
  data: InquiryForm;
}
const props = defineProps<Props>();

const emailDomain = computed((): string|undefined => {
  const re = new RegExp('.*\@(.*)')
  const match = props.data.email.match(re);
  if (match) {
    return match[1];
  }
  return;
})
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