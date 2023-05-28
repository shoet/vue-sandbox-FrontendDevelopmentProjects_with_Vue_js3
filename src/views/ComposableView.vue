<script setup lang="ts">
import { useSongs } from '@/stores/useSongs';
import { useSongsSearch } from '@/stores/useSongsSearch';

const { songs, error, isLoading } = useSongs();
const { searchTerm, filteredItems } = useSongsSearch(songs, ['genre', 'songName']);

</script>

<template>
  <h1>Song list</h1>
  <template v-if="isLoading">loading...</template>
  <template v-else-if="error">error: {{ error }}</template>
  <template v-else>
    <div class="search">
      <input type="text" v-model="searchTerm">
    </div>
    <ul>
      <li v-for="song in filteredItems" v-bind:key="song.id">{{ song }}</li>
    </ul>
  </template>
</template>

<style>
</style>