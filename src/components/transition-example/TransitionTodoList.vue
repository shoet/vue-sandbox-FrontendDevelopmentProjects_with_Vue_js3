<script setup lang="ts">
import { ref } from 'vue';
import type { TodoItem } from './TodoItem.vue';
import TodoItemComponent from './TodoItem.vue';
import gsap from 'gsap';

const todoList = ref<TodoItem[]>([
  {task: 'cock', content: 'curry'},
  {task: 'game', content: 'zelda'},
  {task: 'hobby', content: 'guitar'},
  {task: 'study', content: 'japanese history'},
]);

const onAddTodo = (): void => {
  todoList.value.push({task: 'hoge', content: 'fuga'});
}

const onDeleteTodo = (): void => {
  todoList.value.pop();
}

const onShuffle = (): void => {
  todoList.value.sort(() => Math.random() - 0.5);
  gsap.to('.todo-list__item', {
    duration: 0.2,
    scale: 0.7,
    y: 10,
    x: 30,
    yoyo: true,
    repeat: 1,
    ease: "inOut",
    // delay:1,
    stagger: {
      amount: 0.3,
      grid: "auto",
      from: "end"
    }
  })
}

const onReverse = (): void => {
  todoList.value.reverse();
  gsap.to('.todo-list__item', {
    duration: 0.1,
    // scale: 0.7,
    y: 50,
    // x: 30,
    yoyo: true,
    repeat: 1,
    ease: "inOut",
    // delay:1,
    stagger: {
      amount: 0.1,
      grid: "auto",
      from: "end"
    }
    
  })
}

</script>

<template>
    <div class="transition-todo-list-container">
      <button @click="onAddTodo">ItemPush</button>
      <button @click="onDeleteTodo">ItemPop</button>
      <button @click="onReverse">ItemReverse</button>
      <button @click="onShuffle">ItemShuffle</button>
      <TransitionGroup class="todo-list" name="todo-list" tag="ul">
        <li v-for="todo in todoList" :key="todo.task">
          <TodoItemComponent class="todo-list__item" :todo="todo"/>
        </li>
      </TransitionGroup>
    </div>
</template>

<style scoped>
.container-enter-to {
  height: 800px;
}
.container-enter-active {
  transition: all 1s ease;
}
.transition-todo-list-container {
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
}
.todo-list {
  list-style: none;
  padding-left: 0px;
}
.todo-list__item {
  margin-bottom: 10px;
}

/* enter-from:showされた状態の最初 leave-to:dismissされる状態の最後 */
.todo-list-enter-from, .todo-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.todo-list-enter-active, .todo-list-leave-active {
  transition: all 0.5s ease;
}
.todo-list-move {
  transition: transform 0.5s;
}
</style>
