<script setup lang="ts">
import { ref, onBeforeMount, type RendererElement } from 'vue';
import { useMessageStore } from '@/stores/line-chat/messageStore';
import type { Message } from '@/stores/models/line-chat/message';
import LineChatMessage from './LineChatMessage.vue';

import gsap from 'gsap';

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

const messageOnBeforeEnter = (el: RendererElement): void => {
  const ele = el as HTMLInputElement;
  const messageContainerOwner = ele.getElementsByClassName('line-chat-message--owner')[0];
  let direction = 1;
  if (messageContainerOwner == undefined) {
    direction = -1
  }
  gsap.from(el, {
    opacity: 0,
    x: 30 * direction,
  })
}

const messageOnEnter = (el: RendererElement, done: () => void): void => {
  gsap.to(el, {
    duration: 1,
    opacity: 1,
    onComplete: done,
  })
}

</script>

<template>
  <div class="line-chat-container">
    <div class="message-area">
      <transition-group 
        class="message-list" 
        tag="ul"
        @beforeEnter="messageOnBeforeEnter"
        @enter="messageOnEnter"
        >
        <li class="message" v-for="message in messageStore.messages" :key="message.id">
          <LineChatMessage :message="message" :isOwner="isOwner(message)"/>
        </li>
      </transition-group>
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