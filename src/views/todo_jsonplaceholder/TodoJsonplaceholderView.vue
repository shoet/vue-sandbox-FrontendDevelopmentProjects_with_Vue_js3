<script setup lang="ts">
import { useJsonplaceholder } from '@/stores/todo_jsonplaceholder/useJsonplaceholder';
import TodoList from '@/components/todo_jsonplaceholder/TodoList.vue';
import TodoListItem from '@/components/todo_jsonplaceholder/TodoListItem.vue';

const { data, isLoading, error, updateTodo } = useJsonplaceholder();
</script>

<template>
  <template v-if="error">{{ error }}</template>
  <template v-else-if="isLoading">loading...</template>
  <template v-else>
    <TodoList v-bind:todoList="data">
      <!-- slotPropsを{}この受け方で直接やり取りできる  -->
      <template v-slot:todo="{ todo }">
        <TodoListItem 
          v-bind:id="todo.id" 
          v-bind:title="todo.title" 
          v-bind:completed="todo.completed"
          v-on:onChecked="updateTodo(todo)"
          />
      </template>
    </TodoList>
  </template>
</template>

<style scoped>
</style>