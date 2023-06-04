<script setup lang="ts">
import LineChat from '@/components/transition-example/LineChat.vue';
</script>

<template>
  <div class="line-chat-view-container">
    <div class="chat-container">
      <LineChat :player-id="'a'"/>
    </div>
    <div class="chat-container">
      <LineChat :player-id="'b'"/>
    </div>
  </div>
</template>

<style scoped>
.line-chat-view-container {
  display: flex;
  flex-direction: row;
}
.chat-container {
  width: 50%;
  border: 1px solid black;
}
</style>