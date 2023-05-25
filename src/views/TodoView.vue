<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTodoStore } from '@/stores/TodoStore';

import type { Todo } from '@/types/Todo';
import TodoCard from '@/components/TodoCard.vue';

const todoStore = useTodoStore();
todoStore.initTodoList();


const isLoading = computed(
  (): boolean => {
    return todoStore.isLoading;
  }
)

const todoList = computed(
  () => {
    return todoStore.todoList;
  }
)

const selectedTodo = ref<string[]>([]);
const isSelected = (id: string): boolean => {
  return selectedTodo.value.includes(id);
}

</script>

<template>
  <h1>Todo list</h1>
  {{ selectedTodo }}
  <template v-if="isLoading">
    loading...
  </template>
  <template v-else>
    <div class="todo-list">
      <TodoCard
        v-for="[id, todo] in todoList"
        v-bind:key="id"
        class="todo-list__item"
        v-bind:todo="todo"
        v-bind:isSelected="isSelected(id)"
        >
        <template v-slot:top>
          <input type="checkbox" v-bind:value="todo.id" v-model="selectedTodo">
        </template>
      </TodoCard>
    </div>
  </template>
</template>

<style scoped>
.todo-list {
}
.todo-list__item {
  margin-bottom: 5px;
}
</style>