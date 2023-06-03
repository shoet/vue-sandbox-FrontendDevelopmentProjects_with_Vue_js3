<script setup lang="ts">
</script>

<template>
  <div class="tab-example-tab-container">
    <pre class="terminal"><code><slot/></code></pre>
  </div>
</template>

<style scoped>
.tab-example-tab-container {
  padding: 5px;
}
.terminal {
  background-color: black;
  color: white;
  height: 100%;
  padding: 5px;
}
</style>