<script setup lang="ts">
import { ref } from 'vue';
import Message from '@/components/Message.vue';
import RefExample from '@/components/RefExample.vue';
import WordCountView from './WordCountView.vue';
import EmitView from './EmitView.vue';
import PostMessageView from './PostMessageView.vue';
import JSXTestView from './JSXTestView.vue';
import BlogGallalyView from './BlogGallalyView.vue';
import LanguageCountView from './LanguageCountView.vue';
import LifeCycleView from './LifeCycleView.vue';
import ComposableView from './ComposableView.vue';
import BlogContentfulView from './blog-contentful/BlogContentfulView.vue';
import GlobalCompTest from '@/components/GlobalCompTest.vue';
import NonSfcComponents from './non-sfc-components/NonSfcComponents.vue';
import DynamicComponentView from './dynamic-component/DynamicComponentView.vue';
import DynamicComponentAnimalView from './dynamic-component/DynamicComponentAnimalView.vue';
import TodoJsonplaceholderView from './todo_jsonplaceholder/TodoJsonplaceholderView.vue';

const inputText = ref('');
const messageList = ref<Message[]>([]);

const onPost = (): void => {
  const message: Message = {
    message: inputText.value,
    datetime: (new Date()).toTimeString()
  }
  messageList.value.push(message);
  inputText.value = "";
}

interface Message {
  message: string;
  datetime: string;
}

</script>

<template>
  <!-- <RefExample/> -->
  <!-- <WordCountView/> -->
  <!-- <EmitView/> -->
  <!-- <PostMessageView /> -->
  <!-- <JSXTestView /> -->
  <!-- <BlogGallalyView /> -->
  <!-- <LanguageCountView /> -->
  <!-- <LifeCycleView /> -->
  <!-- <ComposableView /> -->
  <!-- <BlogContentfulView /> -->
  <!-- <GlobalCompTest /> -->
  <!-- <NonSfcComponents/> -->
  <!-- <DynamicComponentView/> -->
  <!-- <DynamicComponentAnimalView/> -->
  <TodoJsonplaceholderView/>
  <!-- <h1>HomeView</h1>
  <div class="post-form">
    <p>
      <input type="text" v-model="inputText">
      <button class="post-form__button" v-on:click="onPost">投稿</button>
    </p>
  </div>
  <div class="message-list">
    <Message 
      v-for="msg in messageList" 
      class="message-item"
      v-bind:key="msg.message"
      v-bind:msg="msg.message"
      v-bind:date="msg.datetime"
      />
  </div> -->
</template>

<style scoped>
.post-form__button {
  margin-left: 10px;
}
.message-item {
  margin-bottom: 5px;
}
</style>
