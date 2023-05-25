<script setup lang="ts">
import { ref, onMounted } from 'vue';

const textBox = ref(null);

const text = ref('');
const extractRef = () => {
  // refにアクセスできるのはonMounted(DOMにマウントされたあと)だが、nullチェックで通過はできる
  if (textBox.value) {
    const input = textBox.value as HTMLInputElement;
    text.value = input.value;
  }
}

</script>

<template>
  <input type="text" ref="textBox">
  <button @click="extractRef">button</button>
  <p>{{ text }}</p>
</template>

<style>
</style>