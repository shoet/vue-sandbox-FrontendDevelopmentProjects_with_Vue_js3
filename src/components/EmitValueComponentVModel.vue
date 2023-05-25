<script setup lang="ts">
interface Props {
  num: number;
}
const props = defineProps<Props>();

interface Emits {
  (event: "update:num", num: number): void;
}
const emits = defineEmits<Emits>();

const onUpdate = (): void => {
  emits("update:num", props.num+1);
}

</script>

<template>
  <div class="child-container">
    <button @click="onUpdate" data-testid="emit-value-component-vmodel">v-model Emit</button>
  </div>
</template>

<style scoped>
.child-container {
  border: 1px solid black;
}
</style>