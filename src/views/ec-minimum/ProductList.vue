<script setup lang="ts">
import { ref, inject, onBeforeMount, computed } from 'vue';
import type { Product } from '@/stores/ec-minimum/userProduct';
import router from '@/router';
import { useProductStore } from '@/stores/ec-minimum/userProduct';
import { useCartStore } from '@/stores/ec-minimum/useCart';
import { onBeforeRouteUpdate } from 'vue-router';

const productStore = useProductStore();
const cartStore = useCartStore();

const cart = computed(() => {
  return cartStore.cart;
})

const onPurchese = () => {
  for (const id in cartStore.cart) {
    console.log(id)
  }
  router.push({name: 'cart'})
}

const onToggleCart = (product: Product) => {
  if (cartStore.cart.has(product.id)) {
    cartStore.removeFromCart(product);
  } else {
    cartStore.addToCart(product);
  }
}

const getCartItemCount = (id: string) => {
  const cartItem = cartStore.cart.get(id);
  if (cartItem == undefined) {
    return 0;
  }
  return cartItem.quantity;
}

onBeforeMount(productStore.fetchProductList);

onBeforeRouteUpdate(() => {
  console.log(cartStore.cart);
})

</script>

<template>
  <h2>Product List</h2>
  <ul>
    <li v-for="product in productStore.productList" v-bind:key="product.id">
      <label for="product">{{ product.name }}: {{ product.price }}</label>
      AddCart
      <input 
        type="checkbox" 
        v-bind:value="product"
        v-bind:checked="cart.has(product.id)"
        v-on:change="onToggleCart(product)"
        >
      {{ getCartItemCount(product.id) }}
    </li>
    <button v-on:click="onPurchese">Purchase</button>
  </ul>
</template>

<style>
</style>