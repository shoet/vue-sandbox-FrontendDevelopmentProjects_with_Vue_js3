import { defineStore } from "pinia";
import axios from "axios";
import type { Todo } from "@/types/Todo";

interface State {
  todoList: Map<string, Todo>;
  isLoading: boolean;
}

export const useTodoStore = defineStore(
  "todoStore",
  {
    state: (): State => {
      return {
        todoList: new Map<string, Todo>(),
        isLoading: true,
      }
    },
    actions: {
      async initTodoList() {
        // const response = await fetch("http://localhost:3000/todo");
        const response = await axios.get("http://localhost:3000/todo", {responseType: "json"})
        if (response.status != 200) {
          console.log("initTodoList error");
          return 
        }
        // const todoListJSON = await response.json();
        const todoListJSON = response.data;
        for (const todo of todoListJSON) {
          this.todoList.set(todo["id"], {
            id: todo["id"],
            name: todo["name"],
            content: todo["content"]
          })
        }
        this.isLoading = false;
      }
    }, 
  }
)
