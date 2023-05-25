<script setup lang="ts">

interface Props {
  msg: string;
  date: string;
}
const props = defineProps<Props>();

</script>

<template>
  <div class="container">
    <p>[{{ date }}] {{ msg }}</p>
  </div>
</template>

<style>
.container {
  border: 1px solid black;
}
</style>