<script setup lang="ts">
import { ref } from 'vue';

import { useContentful } from '@/stores/contentful/useContentful';
import { movieParser } from '@/stores/models/movies';
import type { Movie } from '@/stores/models/movies';
import GridItem from '@/components/dynamic-component/GridItem.vue';

const { data, isLoading, error, addItem, deleteItem } = useContentful('movies', 'title', movieParser);

const displayMode = ref('grid');

</script>

<template>
  <div class="container">
    <div class="display-mode">
      <div class="display-mode__item">
        <input type="radio" id="displayMode1" v-model="displayMode" v-bind:value="'grid'">
        <label for="displayMode1">Grid</label>
      </div>
      <div class="display-mode__item">
        <input type="radio" id="displayMode2" v-model="displayMode" v-bind:value="'list'">
        <label for="displayMode2">List</label>
      </div>
    </div>
    <template v-if="isLoading">
      <p>loading...</p>
    </template>
    <template v-else-if="error">
      <p>{{ error }}</p>
    </template>
    <template v-else>
      <div class="movie-list">
        <GridItem 
          class="movie-list__item"
          v-for="item in data"
          v-bind:key="item.id"
          v-bind:movie="item"/>
      </div>
    </template>
  </div>
</template>

<style scoped>
.container {
  max-width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.display-mode__item {
  display: inline-block;
  margin-right: 10px;
}
.movie-list {
  display: flex;
  /* 折返し */
  flex-wrap: wrap;
}
.movie-list__item {
  width: 33%;
}
</style>