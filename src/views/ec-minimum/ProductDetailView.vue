<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/ec-minimum/userProduct';

interface Props {
  id: string;
}
const props = defineProps<Props>();

const productStore = useProductStore();

</script>

<template>
  <h2>Product Detail</h2>
  {{ productStore.getProduct(props.id)?.name }}
</template>

<style>
</style>