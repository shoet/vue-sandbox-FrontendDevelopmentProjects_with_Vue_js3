<script setup lang="ts">

interface Props {
  keyword: string;
}
defineProps<Props>();

interface Emits {
  (event: 'update:keyword', keyword: string): void;
}
const emits = defineEmits<Emits>();

const onInput = (event: Event): void => {
  const inputElement = event.target as HTMLInputElement;
  emits('update:keyword', inputElement.value);
}

</script>

<template>
  <div class="blog-search-field">
    <input 
      class="blog-search-field__input" 
      type="text" 
      placeholder="Search keyword"
      v-on:input="onInput">
  </div>
</template>

<style scoped>
.blog-search-field  {
  border: 1px solid gray;
  width: 200px;
  border-radius: 5px;
}
.blog-search-field__input {
  border: none;
  outline: none;
  width: 100%;
}
</style>