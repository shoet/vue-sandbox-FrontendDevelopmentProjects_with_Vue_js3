<script setup lang="ts">
import { computed } from 'vue';
import type { Blog } from '@/views/BlogGallalyView.vue';

interface Props {
  blogList: Blog[]
}
const props = defineProps<Props>();

interface Emits {
  (event: 'update:blogList', blogList: Blog[]): void;
}
const emits = defineEmits<Emits>();

const isFavorite = (favorite: boolean): string => {
  return favorite ? '★' : '☆';
}

const toggleFavorite = (blogId: string): void => {
  const blog = props.blogList.find((blog) => blog.id == blogId);
  if (blog == undefined) {
    return
  }
  blog.isFavorite = !blog.isFavorite;
  emits('update:blogList', props.blogList);
}

</script>

<template>
  <ul class="blog-list">
    <li 
      v-for="blog of blogList" 
      v-bind:key="blog.id"
      class="blog-list__item">
      <div class="blog-card">
        <div class="blog-card__body">
          <div class="blog-card__title">{{ blog.title }}</div>
          <div class="blog-card__author">{{ blog.author }}</div>
          <div class="blog-card__description">{{ blog.description }}</div>
        </div>
        <div 
          class="blog-card__favorite" 
          v-on:click="toggleFavorite(blog.id)"
        >
          {{ isFavorite(blog.isFavorite) }}
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.blog-list {
  padding-left: 0px;
}
.blog-list__item {
  list-style: none;
  margin-bottom: 10px;
}

.blog-card {
  margin: 5px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: 0px 0px 2px gray;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.blog-card__title {
  font-size: 1.5rem;
  font-weight: bold;
}
.blog-card__author {
  font-size: 0.5rem;
  color: gray;
}
.blog-card__description {
  font-size: 0.4rem;
  color: black;
}
.blog-card__favorite {
  font-size: 2rem;
  font-weight: bold;
}
</style>