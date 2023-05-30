<script setup lang="ts">
import { ref } from 'vue';
import Blog from '@/components/BlogContentful/Blog.vue';
import BlogEditor from '@/components/BlogContentful/BlogEditor.vue';
import { blogParser } from '@/stores/models/blog';
import { useContentful } from '@/stores/contentful/useContentful';

const {data, isLoading, error, addItem, deleteItem } = useContentful('blog', 'createdAt', blogParser);

const isShowAdd = ref(false);

const onAddClick = () => {
  isShowAdd.value = !isShowAdd.value;
}

</script>

<template>
  <div class="header">
    <div class="title">blog list</div>
    <button 
      v-if="!isShowAdd" 
      class="add-button" 
      @click="onAddClick">Add Blog</button>
  </div>
  <template v-if="isLoading"><p>loading...</p></template>
  <template v-else-if="error">{{ error }}</template>
  <template v-else>
    <div class="blog-component">
      <BlogEditor 
        v-if="isShowAdd" 
        v-model:isShow="isShowAdd"
        v-on:onSubmit="addItem"
        />
      <Blog v-for="blog in data" v-bind:key="blog.id" v-bind:blog="blog" v-on:onDelete="deleteItem"/>
    </div>
  </template>

</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
}
.title {
  font-size: 2rem;
  font-weight: bold;
}
.add-button {
  width: 100px;
  font-size: 1rem;
  background-color: rgb(0, 181, 0);
  color: white;
  border: none;
  border-radius: 5px;
}
</style>