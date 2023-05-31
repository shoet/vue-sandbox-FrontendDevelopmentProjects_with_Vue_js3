<script setup lang="ts">
import type { Movie } from '@/stores/models/movies';

interface Props {
  movie: Movie;
}
const props = defineProps<Props>();
</script>

<template>
  <tr class="list-item">
    <td class="list-item__col list-item__image">
      <img 
        v-bind:src="`${movie.imageUrl}?fit=scale`"
        class="movie-image"
        >
    </td >
    <td class="list-item__col list-item__title">{{ movie.title }}</td>
    <td class="list-item__col list-item__producer">{{ movie.producer }}</td>
    <td class="list-item__col list-item__category">{{ movie.category }}</td>
  </tr>
</template>

<style scoped>
.list-item__col {
  height: 100px;
  padding: 5px;
}
/* containでアスペクト比を維持しつつ、親要素に対して100%でマックスにする */
.movie-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>