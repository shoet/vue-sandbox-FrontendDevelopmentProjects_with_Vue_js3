import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid'

export interface Product {
  id: string;
  name: string;
  price: number;
}

interface State {
  isLoading: boolean;
  productList: Product[];
}

export const useProductStore = defineStore({
  id: 'product',
  state: (): State => {
    return {
      isLoading: false,
      productList: []
    }
  },
  getters: {},
  actions: {
    async fetchProductList() {
      try {
        this.isLoading = true;
        this.productList = [
          {id: uuidv4(), name: 'banana', price: 100},
          {id: uuidv4(), name: 'egg', price: 200},
          {id: uuidv4(), name: 'tomato', price: 100},
        ]
      } catch(error) {

      } finally {
        this.isLoading = false;
      }
    }
  }
})