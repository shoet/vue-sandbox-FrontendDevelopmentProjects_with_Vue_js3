<script setup lang="ts">
import type { Todo } from '@/stores/models/todo_jsonplaceholder/Todo';
interface Props {
  id: number;
  title: string;
  completed: boolean;
}
const props = defineProps<Props>();

interface Emits {
  (event: 'onChecked'): void;
}
const emits = defineEmits<Emits>();

</script>

<template>
  {{ title }}<input type="checkbox" v-bind:checked="props.completed" v-on:change="emits('onChecked')">
</template>

<style>
</style>