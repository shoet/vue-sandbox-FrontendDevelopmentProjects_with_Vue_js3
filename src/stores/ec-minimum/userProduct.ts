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
          {id: 'aaaaa', name: 'banana', price: 100},
          {id: 'bbbbb', name: 'egg', price: 200},
          {id: 'ccccc', name: 'tomato', price: 100},
        ]
      } catch(error) {

      } finally {
        this.isLoading = false;
      }
    }
  }
})