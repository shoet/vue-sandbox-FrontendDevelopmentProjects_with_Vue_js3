<script setup lang="ts">
import { ref, reactive } from 'vue';
import InputText from './InputText.vue';
import type { Blog } from '@/stores/models/blog';
import { v4 as uuidv4 } from "uuid";
import { getJSTDate } from '@/util/utils';

interface Emits {
  (event: 'onSubmit', item: Blog, callback: (() => Promise<void>)): void;
  (event: 'update:isShow', isShow: boolean): void;
}
const emits = defineEmits<Emits>();

const newBlog = reactive({
  title: '',
  author: '',
  content: '',
})

const onCancel = () => {
  newBlog.title = '';
  newBlog.author = '';
  newBlog.content = '';
  emits('update:isShow', false);
}

const isSubmitting = ref(false);
const onSubmit = async () => {
  isSubmitting.value = true;
  const blog: Blog = {
    id: uuidv4(),
    title: newBlog.title,
    author: newBlog.author,
    content: newBlog.content,
    createdAt: getJSTDate(),
    updatedAt: getJSTDate(),
    tags: ['aaa', 'bbb'],
  }
  emits('onSubmit', blog, async () => {
    newBlog.title = '';
    newBlog.author = '';
    newBlog.content = '';
    const sleep = () => new Promise<void>(resolve => setTimeout(resolve, 500));
    await sleep();
    isSubmitting.value = false;
    emits('update:isShow', false);
  });
}
</script>

<template>
  <div class="blog-editor-container">
    <InputText v-bind:label="'Title'" v-bind:placeholder="'Title'" v-bind:type="'text'" v-model:value="newBlog.title"/>
    <InputText v-bind:label="'Author'" v-bind:placeholder="'Author'" v-bind:type="'text'" v-model:value="newBlog.author"/>
    <InputText v-bind:label="'Content'" v-bind:placeholder="'Content'" v-bind:type="'textarea'" v-model:value="newBlog.content"/>
    <div class="submit-container">
      <button class="submit-button submit-button--bg-warn" @click="onCancel" v-bind:disabled="isSubmitting">Cancel</button>
      <button class="submit-button submit-button--bg-success" @click="onSubmit" v-bind:disabled="isSubmitting">Submit</button>
    </div>
  </div>
</template>

<style scoped>
.blog-editor-container {
  border: 1px solid transparent;
  box-shadow: 1px 0px 4px gray;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
}
.submit-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.submit-button {
  margin-left: 10px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 3px;
  font-size: 1.0rem;
}
.submit-button:disabled {
  background-color: gray;
  color: white;
}
.submit-button--bg-warn {
  background-color: rgb(255, 111, 0);
  color: white;
}

.submit-button--bg-success {
  background-color: rgb(0, 132, 255);
  color: white;
}
</style>