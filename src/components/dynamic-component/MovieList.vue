<script setup lang="ts">
import ListItem from './ListItem.vue';
import type { Movie } from '@/stores/models/movies';
interface Props {
  movies: Movie[];
}
const props = defineProps<Props>();

</script>

<template>
  <table>
    <ListItem v-for="movie in movies" v-bind:key="movie.id" v-bind:movie="movie"/>
  </table>
</template>

<style scoped>
</style>