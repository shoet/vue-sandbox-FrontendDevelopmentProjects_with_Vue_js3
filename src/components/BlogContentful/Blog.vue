<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Blog } from '@/stores/models/blog';
import { marked } from "marked";

interface Props {
  blog: Blog;
}
const props = defineProps<Props>();

interface Emits {
  (event: 'onDelete', item: Blog, callback: (() => Promise<void>)): void;
}
const emits = defineEmits<Emits>();

onMounted(async () => {
  const html = marked(props.blog.content);
  document.getElementsByClassName(`${props.blog.id}-content`)[0].innerHTML = html;
})

const isSubmitting = ref(false);
const onDelete = () => {
  isSubmitting.value = true;
  emits('onDelete', props.blog, async () => {
    const sleep = () => new Promise<void>(resolve => setTimeout(resolve, 500));
    await sleep();
    isSubmitting.value = false;
  })
}
</script>

<template>
  <div class="blog-container">
    <div class="blog-container__img-inner" v-if="blog.thumbnailImage">
      <img :src="`${blog.thumbnailImage}?fit=scale&w=350&h=196`">
    </div>
    <div class="blog-container__body-inner">
      <div class="blog-container__head--inner">
        <div class="blog-title">{{ blog.title }}</div>
        <button  
          v-on:click="onDelete"
          class="blog-delete-button"
          v-bind:disabled="isSubmitting"
          >Delete</button>
      </div>
      <div class="blog-sub">{{ blog.author }} {{ blog.createdAt }}</div>
      <div class="blog-content">
        <div v-bind:class="`${blog.id}-content`"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-container {
  border: 1px solid transparent;
  box-shadow: 1px 0px 4px gray;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
}
.blog-container pre {
  background-color: rgb(44, 44, 44);
  color: white;
  padding: 10px;
}
.blog-container__head--inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog-title {
  font-size: 2rem;
  font-weight: bold;
}
.blog-sub {
  font-size: 0.9rem;
  color: gray;
}
.blog-content {
  background-color: rgb(220, 231, 231);
  border-radius: 5px;
  padding: 5px;
}
.blog-delete-button {
  border: none;
  width: 80px;
  height: 40px;
  background-color: rgb(210, 21, 3);
  color: white;
  border-radius: 3px;
}
.blog-delete-button:disabled {
  background-color: gray;
  color: white;
}
</style>