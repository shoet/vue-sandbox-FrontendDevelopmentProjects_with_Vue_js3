
<script setup lang="ts">
import GridItem from './GridItem.vue';
import type { Movie } from '@/stores/models/movies';
interface Props {
  movies: Movie[];
}
const props = defineProps<Props>();

</script>

<template>
  <div class="movie-list">
    <GridItem 
      class="movie-list__item"
      v-for="item in movies"
      v-bind:key="item.id"
      v-bind:movie="item"/>
  </div>
</template>

<style scoped>
.movie-list {
  display: flex;
  /* 折返し */
  flex-wrap: wrap;
}
.movie-list__item {
  width: 33%;
}
</style>