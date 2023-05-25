<script setup lang="ts">
import { ref } from 'vue';
import EmitValueComponent from '@/components/EmitValueComponent.vue';
import EmitValueComponentVModel from '@/components/EmitValueComponentVModel.vue';

const numFromParent = ref(0);
const increment = () => {
  numFromParent.value++;
}

</script>

<template>
  <div class="parent-container">
    <h1>Parent</h1>
    <p data-testid="numFromParent">{{ numFromParent }}</p>
    <!--   基本のパターン   -->
    <EmitValueComponent :num="numFromParent" v-on:onUpdate="increment"/>
    <!-- v-modelのパターン -->
    <EmitValueComponentVModel v-model:num="numFromParent"/>
  </div>
</template>

<style scoped>
[class$="container"] {
  border-color: white;
}
.parent-container {
  border: 1px solid black;
}
</style>