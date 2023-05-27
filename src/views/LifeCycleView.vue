<script setup lang="ts">
import { 
  ref,
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount,
} from 'vue';

onBeforeMount(() => {
  alert('beforeMount: DOMが使用不可');
});

onMounted(() => {
  alert('mounted: DOMが使用可能');
});

onBeforeUpdate(() => {
  alert('beforeUpdate: update前');
});

onUpdated(() => {
  alert('updated: 仮想DOMが更新');
});

onBeforeUnmount(() => {
  alert('beforeUnmount: コンポーネントを破棄する');
});

onUnmounted(() => {
  alert('unmounted: コンポーネントが破棄された');
});

const text = ref('');
const onClick = (): void => {
  text.value = 'hoge';
}

</script>

<template>
  <p>{{ text }}</p>
  <button @click="onClick">button</button>
</template>

<style>
</style>