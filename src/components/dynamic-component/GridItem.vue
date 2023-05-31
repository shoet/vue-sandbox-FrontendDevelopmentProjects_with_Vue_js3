<script setup lang="ts">
import type { Movie } from '@/stores/models/movies';

interface Props {
  movie: Movie;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="movie__inner">
    <img 
      v-bind:src="`${movie.imageUrl}?fit=scale`"
      class="movie-image"
      >
  </div>
</template>

<style scoped>
.movie__inner {
  display: flex;
  align-items: center;
}
.movie-image {
  object-fit: contain;
  width: 100%;
}
</style>