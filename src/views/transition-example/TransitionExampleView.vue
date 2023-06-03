<script setup lang="ts">
import { ref } from 'vue';

import TransitionList from '@/components/transition-example/TransitionList.vue';
import TransitionBox from '@/components/transition-example/TransitionBox.vue';
import TransitionTodoList from '@/components/transition-example/TransitionTodoList.vue';

const isShow = ref(false);
const msg = ref('msg');

const boxCount = 5;
</script>

<template>
  <button v-on:click="isShow = !isShow">show</button>
  <Transition>
    <h1 v-show="isShow">{{ msg }}</h1>
  </Transition>
  <TransitionList/>
  <TransitionBox/>
  <TransitionTodoList/>
</template>

<style scoped>
.v-enter-from, .v-leave-to {
  opacity: 0;
}
.v-enter-active, .v-leave-active {
  transition: opacity 1s ease-in;
}
</style>
