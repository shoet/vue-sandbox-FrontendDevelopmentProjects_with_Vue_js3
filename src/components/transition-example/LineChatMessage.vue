<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Message } from '@/stores/models/line-chat/message';

interface Props {
  message: Message;
  isOwner: boolean;
}
const props = defineProps<Props>();

const styleClass = computed(() => {
  return props.isOwner ? 'line-chat-message line-chat-message--owner' : 'line-chat-message';
})

</script>

<template>
  <div class="line-chat-message-container">
    <div :class="styleClass">
      {{ message.message }}
    </div>
  </div>
</template>

<style scoped>
.line-chat-message-container::after {
  content: '';
  display: block;
  clear: both;
}
.line-chat-message {
  padding: 3px 5px;
  float: left;
  border: 1px solid transparent;
  background-color: gray;
  border-radius: 7px;
  max-width: 100%;
  overflow-wrap: break-word;
}
.line-chat-message--owner {
  background-color: rgb(90, 225, 90);
  float: right;
}
</style>