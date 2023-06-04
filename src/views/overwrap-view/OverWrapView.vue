<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import OverWrapChild from '@/components/over-wrap/OverWrapChild.vue';
</script>

<template>
  <div class="over-wrap-view-container">
    <div class="parent-area">
    <RouterLink v-bind:to="{name: 'overflowWrapViewChild'}">to child</RouterLink>
      <!-- main -->
      <p class="sample-text">ccontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentontent</p>
    </div>
    <div class="router-area">
      <RouterView v-slot="{ Component }">
        <Transition name="route" :mode="'in-out'">
          <component v-bind:is="Component"></component>
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.over-wrap-view-container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.sample-text {
  overflow-wrap: break-word;
}
.parent-area {
  position: absolute;
  top: 0px;
}
.router-area {
  top: 0px;
}
.route-enter-from, .route-leave-to {
  opacity: 0;
  transform: translateY(100vh);
}
.route-enter-active, .route-leave-active {
  transition: all 0.5s ease-out;
}
</style>