<script lang="ts" setup>
import { defineComponent } from 'vue';
import { h } from 'vue';
interface Props {
  name: string;
  age: number;
}
const props = defineProps<Props>();

const render = () => {
  const hasValue = props.name && props.age;
  return hasValue
    ? h('div', `name: ${props.name}, age: ${props.age}`)
    : h('div', { style: {color: 'red'}}, 'invalid props')
    ;
}
</script>

<template>
  <render />
</template>
