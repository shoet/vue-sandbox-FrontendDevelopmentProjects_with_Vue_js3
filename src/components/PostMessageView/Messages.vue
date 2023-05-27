<script setup lang="ts">
import type { Message } from '@/views/PostMessageView.vue';

interface Props {
  messages: Message[];
}
const props = defineProps<Props>();

</script>

<template>
  <div class="messages-container" data-testid="messages-container">
    <ul class="messages-list">
      <li class="messages-list__item" 
        v-for="msg in messages"
        v-bind:key="msg.id"
        data-testid="messages-message">
        {{ msg.message }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.messages-container {
  border: 1px solid black;
}
.messages-list {
  padding-left: 0px;
}
.messages-list__item {
  list-style: none;
}
</style>