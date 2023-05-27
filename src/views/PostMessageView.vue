<script setup lang="ts">
import { ref } from 'vue';

import Messages from '@/components/PostMessageView/Messages.vue';
import MessageEditor from '@/components/PostMessageView/MessageEditor.vue';

export interface Message {
  id: string;
  message: string;
}

const messages = ref<Message[]>([]);

</script>

<template>
  <h1>Post Message View</h1>
  <Messages v-bind:messages="messages"/>
  <MessageEditor v-model:messages="messages"/>
</template>

<style>
</style>