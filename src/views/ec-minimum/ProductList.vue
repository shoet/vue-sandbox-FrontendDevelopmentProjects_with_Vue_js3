<script setup lang="ts">
import { ref, inject, onBeforeMount } from 'vue';
import type { Product } from '@/stores/ec-minimum/userProduct';
import router from '@/router';
import { useProductStore } from '@/stores/ec-minimum/userProduct';
import { useCartStore } from '@/stores/ec-minimum/useCart';

const productStore = useProductStore();
const cartStore = useCartStore();

const onPurchese = () => {
  for (const id in cartStore.cart) {
    console.log(id)
  }
  router.push({name: 'cart'})
}

const onToggleCart = (product: Product) => {
  cartStore.addToCart(product);
}

onBeforeMount(productStore.fetchProductList);

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
        v-bind:checked="cartStore.cart.has(product.id)"
        v-on:change="onToggleCart(product)"
        >
    </li>
    <button v-on:click="onPurchese">Purchase</button>
  </ul>
</template>

<style>
</style>