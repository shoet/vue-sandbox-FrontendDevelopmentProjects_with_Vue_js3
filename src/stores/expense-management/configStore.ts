import { defineStore } from "pinia";

type layoutModeColor = "light" | "dark";

interface State {
  layoutModeColor: layoutModeColor;
}

export const useConfigStore = defineStore({
  id: 'configStore',
  state: (): State => {
    return {
      layoutModeColor: "light"
    }
  },
  getters: {},
  actions: {
    toggleLayoutModeColor(): void {
      this.layoutModeColor = this.layoutModeColor == "light" ? "dark" : "light";
    }
  },
})
