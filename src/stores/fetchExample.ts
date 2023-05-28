
import { ref } from "vue";

export async function useFetch(url: string) {

  const data = ref<any>(null);
  const error = ref<any>(null);
  const isLoading = ref(false);

  isLoading.value = true;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    data.value = await res.json();
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }

  return { data, error, isLoading };
}