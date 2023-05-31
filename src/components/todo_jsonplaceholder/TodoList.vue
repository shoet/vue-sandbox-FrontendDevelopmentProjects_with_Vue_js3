<script setup lang="ts">
import type { Todo } from '@/stores/models/todo_jsonplaceholder/Todo';
interface Props {
  todoList: Todo[];
}
const props = defineProps<Props>();
</script>

<template>
  <ul class="todo-list" v-for="todo in todoList" v-bind:key="todo.id">
    <li>
      <slot name="todo" v-bind:todo="todo"></slot>
    </li>
  </ul>
</template>

<style>
</style>