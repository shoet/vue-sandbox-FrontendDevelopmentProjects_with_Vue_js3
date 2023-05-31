<script setup lang="ts">
import { ref, shallowRef, computed } from 'vue';

import { useContentful } from '@/stores/contentful/useContentful';
import { movieParser } from '@/stores/models/movies';
import MovieGrid from '@/components/dynamic-component/MovieGrid.vue';
import MovieList from '@/components/dynamic-component/MovieList.vue';

const { data, isLoading, error } = useContentful('movies', 'title', movieParser);

const currentComponent = shallowRef(MovieGrid);
const displayOptions = [{
  name: 'Grid',
  component: MovieGrid
}, {
  name: 'List',
  component: MovieList
}]

</script>

<template>
  <div class="container">
    DisplayMode: <select v-model="currentComponent">
      <option 
        v-for="option in displayOptions" 
        v-bind:key="option.name"
        v-bind:value="option.component">
        {{ option.name }}
      </option>
    </select>
    <template v-if="isLoading">
      <p>loading...</p>
    </template>
    <template v-else-if="error">
      <p>{{ error }}</p>
    </template>
    <template v-else>
      <component v-bind:is="currentComponent" v-bind:movies="data"/>
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
</style>