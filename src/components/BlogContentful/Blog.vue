<script setup lang="ts">
import { onBeforeMount, onUpdated, onMounted } from 'vue';
import type { Blog } from '@/stores/blog-contentful/useBlogs';
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown';
import { marked } from "marked";

interface Props {
  blog: Blog;
}
const props = defineProps<Props>();

onMounted(async () => {
  const html = marked(props.blog.content);
  document.getElementsByClassName(`${props.blog.id}-content`)[0].innerHTML = html;
})
</script>

<template>
  <div class="blog-container">
    <div class="blog-container__img-inner" v-if="blog.thumbnailImage">
      <img :src="`${blog.thumbnailImage}?fit=scale&w=350&h=196`">
    </div>
    <div class="blog-container__body-inner">
      <div class="blog-title">{{ blog.title }}</div>
      <div class="blog-sub">{{ blog.author }} {{ blog.created_at }}</div>
      <div class="blog-content">
        <div v-bind:class="`${blog.id}-content`"></div>
      </div>
    </div>
  </div>
</template>

<style>
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
</style>