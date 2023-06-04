<script setup lang="ts">
import router from '@/router';

const onClose = (): void => {
  router.go(-1);
}
</script>

<template>
  <div class="over-wrap-child-container">
    <div class="parent-area">
      <!-- parent -->
    </div>
    <div class="this-area">
      <div class="header">
        <div class="header__title">
          child area
        </div>
        <div class="header__close-button">
          <button @click="onClose">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.over-wrap-child-container {
  /* background-color: gray; */
}
.parent-area {
  opacity: 0.3;
  height: 30vh;
}
.this-area {
  border: 1px solid black;
  height: 70vh;
  margin: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}

</style>