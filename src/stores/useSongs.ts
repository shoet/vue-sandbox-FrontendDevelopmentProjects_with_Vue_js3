import { ref, onBeforeMount } from "vue";

import { useFetch } from "./fetchExample";

export interface Song {
  id: string;
  songName: string;
  genre: string;
}

export const useSongs = () => {
  const songs = ref<Song[]>([]);
  const error = ref(null);
  const isLoading = ref(false);

  const getSongs = async () => {
    isLoading.value = true;

    const url = 'http://localhost:3001/songs';
    const { data, error } = await useFetch(url);
    if (error.value) {
      error.value = error;
    }
    const resultsJSONStr = JSON.stringify(data.value.results);
    const resultsObj: Song[] = JSON.parse(resultsJSONStr);
    songs.value = resultsObj;
    isLoading.value = false;
  };

  onBeforeMount(getSongs);

  return {
    songs,
    error,
    isLoading,
  };

};