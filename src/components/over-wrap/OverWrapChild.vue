<script setup lang="ts">
</script>

<template>
  <div class="over-wrap-child-container">
    <div class="parent-area">
      <!-- parent -->
    </div>
    <div class="this-area">
      child area
    </div>
  </div>
</template>

<style scoped>
.over-wrap-child-container {
  /* background-color: gray; */
}
.parent-area {
  opacity: 0.3;
  height: 30vh;
}
.this-area {
  border: 1px solid black;
  height: 70vh;
  margin: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}

</style>