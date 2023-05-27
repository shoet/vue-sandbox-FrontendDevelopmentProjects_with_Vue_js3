<script setup lang="ts">
import { ref, watch } from 'vue';

import { v4 as uuidv4 } from 'uuid';

import BlogSearchField from '@/components/BlogSearchField.vue';
import BlogList from '@/components/BlogList.vue';

export interface Blog {
  id: string;
  title: string;
  author: string;
  description: string;
  isFavorite: boolean;
}

const blogListInit: Blog[] = [
  {id: uuidv4(), title: 'blog1', author: 'michel', description: 'aaa', isFavorite: false},
  {id: uuidv4(), title: 'blog2', author: 'bob', description: 'bbb', isFavorite: false},
  {id: uuidv4(), title: 'blog3', author: 'shelly', description: 'ccc', isFavorite: false},
  {id: uuidv4(), title: 'blog4', author: 'tom', description: 'ddd', isFavorite: false},
  {id: uuidv4(), title: 'blog5', author: 'harry', description: 'eee', isFavorite: false},
]

const blogList = ref<Blog[]>(blogListInit);
const searchKeyword = ref('');

const filteredBlogTitle = (keyword: string): Blog[] => {
  return blogListInit.filter((blog) => blog.title.includes(keyword));
}

watch(searchKeyword, (keyword) => {
  blogList.value = filteredBlogTitle(keyword);
})

</script>

<template>
  <div class="container">
    <h1>BlogGallalyView</h1>
    <div class="header-area">
      <BlogSearchField 
        class="search-field"
        data-testid="search-field"
        v-model:keyword="searchKeyword"/>
    </div>
    <div class="main">
      <BlogList v-model:blog-list="blogList"/>
    </div>
  </div>
</template>

<style scoped>

.main {
  /* border: 1px solid black; */
}
.search-field {
  margin-bottom: 20px;
}
</style>