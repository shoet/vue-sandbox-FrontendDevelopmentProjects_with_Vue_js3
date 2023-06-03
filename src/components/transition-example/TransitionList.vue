<script setup lang="ts">
import { ref } from 'vue';

const numList = ref<number[]>([]);

const sleep = (sec: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, sec*1000));
}

const initList = async () => {
  let count = 1;
  while (true) {
    await sleep(1);
    if (count > 10) {
      count = 1;
      numList.value = [];
    }
    numList.value.push(count);
    count++;
  }
}

const onPushClick = (): void => {
  numList.value.push(Math.max(...numList.value)+1);
}
const onPopClick = (): void => {
  numList.value.pop();
}

initList();
</script>

<template>
  <button @click="onPushClick">Push</button>
  <button @click="onPopClick">Pop</button>
  <TransitionGroup name="transition-list" tag="ul" class="transition-list">
    <li v-for="num in numList" :key="num">{{ num }}</li>
  </TransitionGroup>
</template>

<style scoped>
.transition-list-enter-from, .transition-list-leave-to {
  opacity: 0;
}

.transition-list-enter-active, .transition-list-leave-active {
  transition: opacity 1s ease;
}
.transition-list {
  display: flex;
}
.transition-list li {
  list-style: none;
}
</style>