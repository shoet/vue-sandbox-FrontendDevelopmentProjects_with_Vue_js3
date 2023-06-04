<script setup lang="ts">
export interface TodoItem {
  task: string;
  content: string;
}

interface Props {
  todo: TodoItem;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="todo-item">
    <div class="todo-item__title">{{ todo.task }}</div>
    <div class="todo-item__content">{{ todo.content }}</div>
  </div>
</template>

<style scoped>
.todo-item {
  height: 50px;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 5px;
  padding: 10px;
  font-family: sans-serif;
}
.todo-item__title {
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
}
.todo-item__content {
  font-size: 0.7rem;
  color: gray;
}
</style>