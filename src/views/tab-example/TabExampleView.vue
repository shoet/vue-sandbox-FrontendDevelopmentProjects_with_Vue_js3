<script setup lang="ts">
import { RouterView } from 'vue-router';

interface LinkList {
  name: string;
  text: string;
}

const linkList: LinkList[] = [
  {name: 'tab1', text: 'Tab1'},
  {name: 'tab2', text: 'Tab2'},
  {name: 'tab3', text: 'Tab3'},
]

</script>

<template>
  <div class="tab-example-view-container">
    <div class="tab-menu">
      <template v-for="link in linkList" v-bind:key="link.name">
        <RouterLink v-bind:to="{ name: link.name}" active-class="tab-menu--active" class="tab-menu__item">
          {{ link.text }}
        </RouterLink>
        <div class="tab-spacer" v-if="link.name !== linkList[linkList.length-1].name"></div>
      </template>
    </div>
    <div class="tab-content">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>

.tab-example-view-container {
  --border-width: 4px;
  --border-color: rgb(91, 197, 154);
}

.tab-example-view-container {
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
.tab-menu {
  display: flex;
  justify-content: start;
  height: 50px;
}

.tab-menu__item {
  width: 100%;
  border-left: var(--border-width) solid var(--border-color);
  border-top: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: var(--border-color);
  color: white;
  text-decoration: none;
}
.tab-menu--active {
  background-color: white;
  color: var(--border-color);
  text-decoration: none;
}

.tab-spacer {
  width: 50px;
  border-bottom: var(--border-width) solid var(--border-color);
}

.tab-content {
  border-left: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
  border-bottom: var(--border-width) solid var(--border-color);
  height: 200px;
  border-radius: 0px 0px 10px 10px;
}
</style>