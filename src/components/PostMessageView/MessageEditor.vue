<script setup lang="ts">
import { ref } from 'vue';

import { v4 as uuidv4 } from "uuid";
import type { Message } from '@/views/PostMessageView.vue';

interface Props {
  messages: Message[];
}
const props = defineProps<Props>();

const currentMessage = ref('');
const textArea = ref<HTMLInputElement>();

interface Emits {
  (event: 'update:messages', messages: Message[]): void;
}
const emits = defineEmits<Emits>();

const onChange = (event: Event): void => {
  const textArea = event.target as HTMLInputElement;
  currentMessage.value = textArea.value;
}

const onSend = (): void => {
  const newMessage: Message = {id: uuidv4(), message: currentMessage.value};
  emits('update:messages', [...props.messages, newMessage]);
  currentMessage.value = '';
  if (textArea.value) {
    textArea.value.value = '';
  }
}

</script>

<template>
  <textarea cols="30" rows="10" v-on:change="onChange" ref="textArea" data-testid="message-editor__textarea"></textarea>
  <button v-on:click="onSend" data-testid="message-editor__button">Post</button>
</template>

<style>
</style>