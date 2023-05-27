<script setup lang="ts">
import JSXTextComponent from '@/components/JSXTextComponent.vue'
</script>

<template>
  <div class="container">
    <h1>JSXTextView</h1>
    <JSXTextComponent v-bind:name="'hoge'" v-bind:age="30"/>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid black;
}
</style>