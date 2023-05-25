<script setup lang="ts">
import { ref, reactive } from 'vue';

const data = reactive({
  name: "hoge",
})

const age = ref(20);

</script>

<template>
  <div class="container-slot">
    <h2>slot props child</h2>
    <!-- 1. 子供側でv-bindでバインド -->
    <slot v-bind:data="data"></slot>
    <slot name="age-slot" v-bind:age="age"></slot>
  </div>
</template>

<style>
.container-slot {
  border: 1px solid black;
}
</style>