<script setup lang="ts">
</script>

<template>
  <header class="header">
    <nav class="navigation">
      <slot name="navigation"/>
    </nav>
    <div class="title">
      <slot name="title"/>
    </div>
  </header>

  <main class="main">
    <div class="left">
      left
    </div>
    <div class="center">
      center
    </div>
    <div class="right">
      right
    </div>
  </main>

  <footer class="footer">
    footer
  </footer>
  
</template>

<style scoped>
.header {
  height: 150px;
  border: 1px solid black;
}

.main::after {
  content: '';
  clear: both;
  display: block;
}

.left {
  float: left;
  width: 25%;
}

.center {
  float: left;
  width: 50%;
}

.right {
  float: left;
  width: 25%;
}
.footer {
  height: 150px;
  border: 1px solid black;
}
</style>