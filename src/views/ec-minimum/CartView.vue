<script setup lang="ts">
import router from '@/router';

import { useCartStore } from '@/stores/ec-minimum/useCart';
import type { Product } from '@/stores/ec-minimum/userProduct';

const cartStore = useCartStore();

const onPaymentClick = () => {
}

const onBackClick = () => {
  router.go(-1);
}

const countPerItem = (product: Product): number => {
  const item = cartStore.cart.get(product.id);
  if (item == undefined) {
    return 0;
  }
  return item.quantity;
}
</script>

<template>
  <h2>In the cart</h2>
  <ul>
    <li v-for="[id, product] in cartStore.cart" v-bind:key="id">{{ product.name }}: {{ countPerItem(product) }}個</li>
    <p>合計金額：{{ cartStore.totalPrice }}</p>
  </ul>
  <button v-on:click="onPaymentClick">Payment</button>
  <button v-on:click="onBackClick">back</button>
</template>

<style>
</style>