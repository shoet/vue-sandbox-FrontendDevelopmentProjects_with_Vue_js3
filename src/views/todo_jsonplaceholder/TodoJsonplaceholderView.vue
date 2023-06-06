<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useJsonplaceholder } from '@/stores/todo_jsonplaceholder/useJsonplaceholder';
import TodoList from '@/components/todo_jsonplaceholder/TodoList.vue';
import TodoListItem from '@/components/todo_jsonplaceholder/TodoListItem.vue';

const jsonplaceholderStore = useJsonplaceholder();
onBeforeMount(jsonplaceholderStore.fetchTodo);
</script>

<template>
  <template v-if="jsonplaceholderStore.isLoading">loading...</template>
  <template v-else-if="jsonplaceholderStore.error">{{ jsonplaceholderStore.error }}</template>
  <template v-else>
    <TodoList v-bind:todoList="jsonplaceholderStore.data">
      <template v-slot:todo="{ todo }">
        <TodoListItem 
          v-bind:id="todo.id" 
          v-bind:title="todo.title" 
          v-bind:completed="todo.completed"
          v-on:onChecked="jsonplaceholderStore.updateTodo(todo)"
          />
      </template>
    </TodoList>
  </template>
</template>

<style scoped>
</style>