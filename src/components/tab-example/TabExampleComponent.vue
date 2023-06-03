<script setup lang="ts">

import { ref, computed, onBeforeMount } from 'vue';


type Result = string[];

const isLoading = ref(false);
const randomWords = ref<string[]>([]);
const randomText = computed((): string => {
  return randomWords.value.join(',');
})

const fetchRandomWords = async () => {
  isLoading.value = true;
  try {
    const result = await fetch('https://random-word-api.vercel.app/api?words=500&length=5');
    const resultObj: Result = await result.json();
    randomWords.value = resultObj;
  } catch(error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
}

onBeforeMount(fetchRandomWords);

</script>

<template>
  <div class="tab-example-tab-container">
    <h1><slot name="header"/></h1>
    <pre class="terminal"><code><slot name="code"/></code></pre>
    <template v-if="!isLoading"><p class="random-text">{{ randomText }}</p></template>
  </div>
</template>

<style scoped>
.tab-example-tab-container {
  padding: 5px;
}
.terminal {
  background-color: black;
  color: white;
  height: 100%;
  padding: 5px;
}
.random-text {
  overflow-wrap: break-word;
}
</style>