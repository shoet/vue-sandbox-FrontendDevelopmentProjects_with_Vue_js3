import { ref, computed } from "vue"
import type { Ref } from "vue";

import type { Song } from "./useSongs"

export const useSongsSearch = (songs: Ref<Song[]>, filters = ['genre']) => {
  const searchTerm = ref('');
  const filteredItems = computed(() => {
    console.log(songs);
    return songs.value.filter((song: any) => {
      return filters.some(filter => {
        return song[filter].toLowerCase().includes(searchTerm.value.toLowerCase());
      })
    })
  })

  return {
    searchTerm,
    filteredItems,
  }
}