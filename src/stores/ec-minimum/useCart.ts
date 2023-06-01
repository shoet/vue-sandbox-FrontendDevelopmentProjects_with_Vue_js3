import { defineStore } from "pinia";
import type { Product } from "./userProduct";

class CartItem {
  constructor(public id: string, public name: string, public quantity: number, public price: number) {}
}

type Cart = Map<string, CartItem>;

interface State {
  isLoading: boolean;
  cart: Cart;
}

export const useCartStore = defineStore({
  id: 'cart',
  state: (): State => {
    return {
      isLoading: false,
      cart: new Map(),
    }
  },
  getters: {
    itemCount: (state): number => {
      return state.cart.size;
    },
    totalPrice: (state): number => {
      return Array.from(state.cart.values()).reduce((total, cartItem) => {
        return total + (cartItem.price * cartItem.quantity);
      }, 0);
    },
  },
  actions: {
    addToCart(product: Product): void {
      const cartItem = this.cart.get(product.id);
      if (cartItem == undefined) {
        this.cart.set(product.id, new CartItem(product.id, product.name, 1, product.price));
      } else {
        cartItem.quantity++;
      }
    },
    removeFromCart(product: Product): void {
      const cartItem = this.cart.get(product.id);
      if (cartItem == undefined) {
        return
      }
      if (cartItem.quantity == 1) {
        this.cart.delete(product.id);
        return;
      }
      cartItem.quantity--;
    },
    getCartItem(id: string): CartItem | undefined {
      return this.cart.get(id);
    }
  }
})