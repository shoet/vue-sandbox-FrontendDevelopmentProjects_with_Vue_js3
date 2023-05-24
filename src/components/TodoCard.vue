<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Todo } from '@/types/Todo';

interface Props {
  todo: Todo;
  isSelected: boolean;
}
const props = defineProps<Props>();

const selectedClass = computed(
  (): string => {
    if (props.isSelected) {
      return "todo-item--selected";
    }
    return "";
  }
)

</script>

<template>
  <div v-bind:class="selectedClass">
    <div class="todo-item">
      <div class="todo-item__top">
        <slot name="top"/>
      </div>
      <div class="todo-item__body">
        <div class="todo-item__name">{{ todo.name }}</div>
        <div class="todo-item__content">{{ todo.content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  transition: 0.25s;
}
.todo-item--selected {
  background-color: rgb(163, 252, 252);
}
.todo-item__body {
  margin-left: 20px;
}
.todo-item__name {
  font-size: 2rem;
  font-weight: bold;
}
.todo-item__content {
  font-size: 0.8rem;
  color: gray;
}
</style>