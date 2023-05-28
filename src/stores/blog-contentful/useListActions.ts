import type { Ref } from "vue";

export const useListActions = <T>(items: Ref<T[]>) => {
  const addItem = (item: T) => {
    items.value.push(item);
  }

  const deleteItem = (id: string) => {
    const index = items.value.findIndex((item: any) => item.id === id);
    index >= 0 && items.value.splice(index, 1);
  }

  return {
    addItem,
    deleteItem
  }

}