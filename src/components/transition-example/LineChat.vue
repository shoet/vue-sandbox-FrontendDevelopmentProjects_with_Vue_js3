<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useMessageStore } from '@/stores/line-chat/messageStore';
import type { Message } from '@/stores/models/line-chat/message';
import LineChatMessage from './LineChatMessage.vue';

interface Props {
  playerId: string;
}
const props = defineProps<Props>();

const messageStore = useMessageStore();

const newMessage = ref('');
const onPost = (): void => {
  messageStore.postMessage(props.playerId, newMessage.value);
  newMessage.value = '';
}

const isOwner = (message: Message): boolean => {
  return message.userId === props.playerId;
}

onBeforeMount(messageStore.initMessage);

</script>

<template>
  <div class="line-chat-container">
    <div class="message-area">
      <ul class="message-list">
        <li class="message" v-for="message in messageStore.messages" :key="message.id">
          <LineChatMessage :message="message" :isOwner="isOwner(message)"/>
        </li>
      </ul>
    </div>
    
    <div class="chat-area">
      <input class="chat-area__input" type="text" placeholder="メッセージ" v-model="newMessage">
      <button class="chat-area__button" @click="onPost">送信</button>
    </div>
  </div>
</template>

<style scoped>
.line-chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.message-area {
  background-color: skyblue;
  height: 100%;
  overflow: auto;
  overflow-y: scroll;
}
.message-area::-webkit-scrollbar {
  display: none;
}
.message-list {
  list-style: none;
  padding-left: 0px;
}
.message {
  margin: 5px 3px;
}
.chat-area {
  background-color: rgb(207, 207, 207);
  display: flex;
  align-items: center;
  padding: 5px;
}
.chat-area__input {
  width: 100%;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: white;
}
.chat-area__input::placeholder {
  color: rgb(139, 139, 139);
}
.chat-area__button {
  border: none;
  background-color: rgb(0, 119, 255);
  color: white;
  border-radius: 5px;
  margin-left: 5px;
  width: 50px;
}
</style>