<script setup lang="ts">
import { ref, computed } from 'vue';

import { useContentful } from '@/stores/contentful/useContentful';
import { movieParser } from '@/stores/models/movies';
import MovieGrid from '@/components/dynamic-component/MovieGrid.vue';
import MovieList from '@/components/dynamic-component/MovieList.vue';

const { data, isLoading, error } = useContentful('movies', 'title', movieParser);

const displayMode = ref(0);
const components = [MovieGrid, MovieList];
const currentComponent = computed(() => {
  return components[displayMode.value];
})

</script>

<template>
  <div class="container">
    <div class="display-mode">
      <div class="display-mode__item">
        <input type="radio" id="displayMode1" v-model="displayMode" v-bind:value=0>
        <label for="displayMode1">Grid</label>
      </div>
      <div class="display-mode__item">
        <input type="radio" id="displayMode2" v-model="displayMode" v-bind:value=1>
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