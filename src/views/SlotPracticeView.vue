<script setup lang="ts">
import { ref } from 'vue';

import SlotPracticeComonent from '@/components/SlotPracticeComonent.vue';
import SlotPropsPracticeComonent from '@/components/SlotPropsPracticeComponent.vue';

const count = ref(0);
const onIncrement = () => {
  count.value++;
}
</script>

<template>
  <div class="parent-container">
    <h1>Parent View title</h1>

    <div>
      <SlotPracticeComonent>
        <template v-slot:slot-component>
          <p>from parent</p>
          <p>count {{ count }} in parent view</p>
        </template>
      </SlotPracticeComonent>
      <button @click="onIncrement">インクリメント</button>
    </div>

    <SlotPropsPracticeComonent>
      <!-- 2.親側でslotPropsを「slotProps」として受け取る -->
      <template v-slot:default="slotProps">
        <p>from parent</p>
        <!-- 3.親側で「slotProps」からデータを受け取る -->
        <p>{{ slotProps.data.name }}</p>
      </template>

      <template v-slot:age-slot="slotProps">
        <p>from parent</p>
        <p>get from age-slot: {{ slotProps.age }}</p>
      </template>
    </SlotPropsPracticeComonent>

  </div>
</template>

<style scoped>
.parent-container {
  border: 1px solid black;
}
</style>