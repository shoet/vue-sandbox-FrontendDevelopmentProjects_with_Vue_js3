import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { defineStore } from "pinia";

import { Constants } from "@/constants/use_jsonplaceholder/constants";
import type { Todo } from '@/stores/models/todo_jsonplaceholder/Todo';

interface State {
  data: Todo[];
  isLoading: boolean;
  error?: any;
}

export const useJsonplaceholder = defineStore(
  'useJsonplaceholder', {
    state: (): State => {
      return {
        data: [],
        isLoading: false,
        error: null,
      }
    },
    getters: {},
    actions: {
      async fetchTodo() {
        this.isLoading = true;

        const items = await axios.get(`${Constants.API_URL}/todos`);
        this.data = items.data;
        this.isLoading = false;
      },
      async updateTodo(todo: Todo) {
        const result = await axios.patch(`${Constants.API_URL}/todos/${todo.id}`, {
          completed: todo.completed
        });
        console.log(result);
      }

    }
  }
)