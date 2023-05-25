<script setup lang="ts">

interface Props {
  msg: string;
  data: string;
}
const props = defineProps<Props>();

</script>

<template>
  <div class="container">
    <p>[{{ data }}] {{ msg }}</p>
  </div>
</template>

<style>
.container {
  border: 1px solid black;
}
</style>