<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as Countable from 'countable';

const textArea = ref(null);
const countable = ref<any>(null);

onMounted(() => {
  Countable.on(textArea.value, (count: any) => {
    countable.value = count;
  })
})

onBeforeUnmount(() => {
  Countable.off(textArea.value);
})

</script>

<template>
  <h1>Word count</h1>
  <textarea ref="textArea" cols="30" rows="10"></textarea>
  <template v-if="countable">
    <p>Paragraphs: {{ countable.paragraphs }}</p>
    <p>Sentences: {{ countable.sentences }}</p>
    <p>Words: {{ countable.words }}</p>
  </template>
</template>

<style>
</style>