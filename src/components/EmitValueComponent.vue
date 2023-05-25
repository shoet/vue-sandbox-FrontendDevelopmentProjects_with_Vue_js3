<script setup lang="ts">
interface Props {
  num: number
}
const props = defineProps<Props>();

interface Emits {
  (event: "onUpdate"): void;
}
const emits = defineEmits<Emits>();

const onClick = (): void => {
  emits("onUpdate");
}

</script>

<template>
  <div class="child-container">
    <button @click="onClick" data-testid="emit-value-component">Normal Emit</button>
  </div>
</template>

<style scoped>
.child-container { 
  border: 1px solid black;
}
</style>