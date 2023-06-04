<script setup lang="ts">
import { ref, type RendererElement } from 'vue';
import gsap from 'gsap';

const isShow = ref(false);

const onBeforeEnter = (el: RendererElement) => {
  el.style.opacity = 0;
};
const onEnter = (el: RendererElement, done: () => void) => {
  gsap.to(el, {
    opacity: 1,
    duration: 1,
    onComplete: done,
  })
};

</script>

<template>
  <div class="animation-gsap-container">
    <h1>GSAP Example</h1>
    <button @click="isShow = !isShow">isShow</button>
    <Transition 
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      v-bind:css="false"
      >
      <p v-if="isShow">Show GSAP</p>
    </Transition>
  </div>
</template>

<style>
</style>