<script setup lang="ts">
import { ref } from 'vue';

const isShow = ref(false);

const onStart = () => {
  isShow.value = !isShow.value;
}

</script>

<template>
  <button @click="onStart">toggle</button>
  <div class="container">
    <Transition name="round" appear>
      <div class="round">
        <div class="round__text">丸</div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  position: relative
}
.round {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: red;
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translateX(-100%) translateY(-100%);
}
.round__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 30px;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: white;
}
.round-enter-from {
  top: 0%;
  left: 0%;
  transform: translateX(0%) translateY(0%);
  opacity: 0;
}
.round-enter-to {
  top: 100%;
  left: 100%;
  transform: translateX(-100%) translateY(-100%);
  opacity: 1;
}
.round-enter-active {
  transition: all 1s ease-in;
}
</style>