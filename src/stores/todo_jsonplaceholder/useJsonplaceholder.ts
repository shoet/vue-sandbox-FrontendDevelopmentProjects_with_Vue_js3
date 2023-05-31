import axios from "axios";
import { onBeforeMount, ref } from "vue";

import { Constants } from "@/constants/use_jsonplaceholder/constants";
import type { Todo } from '@/stores/models/todo_jsonplaceholder/Todo';


export const useJsonplaceholder = () => {
  const data = ref<Todo[]>([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchTodo = async () => {
    isLoading.value = true;

    const items = await axios.get(`${Constants.API_URL}/todos`);
    data.value = items.data;
    isLoading.value = false;
  }

  const updateTodo = async (todo: Todo) => {
    const result = await axios.patch(`${Constants.API_URL}/todos/${todo.id}`, {
      completed: todo.completed
    });
    console.log(result);
  }

  onBeforeMount(fetchTodo);

  return { data, isLoading, error, updateTodo };
}