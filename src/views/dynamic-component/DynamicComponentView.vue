<script setup lang="ts">
import { ref, computed } from 'vue';
import ComponentA from '@/components/dynamic-component/ComponentA.vue';
import ComponentB from '@/components/dynamic-component/ComponentB.vue';
import ComponentC from '@/components/dynamic-component/ComponentC.vue';

const components = [ComponentA, ComponentB, ComponentC];
const componentIndex = ref(0);
const currentComponent = ref(ComponentA);

const onComponentToggle = () => {
  let newIndex = componentIndex.value + 1;
  if (newIndex >= components.length) {
    newIndex = 0;
  }
  componentIndex.value = newIndex;
  currentComponent.value = components[componentIndex.value];
}
</script>

<template>
  <div class="container">
    <keep-alive>
      <component v-bind:is="currentComponent"/>
    </keep-alive>
  </div>
  <button @click="onComponentToggle">Toggle</button>
</template>

<style scoped>
.container {
  border: 1px solid black;
  margin: 20px;
}
</style>