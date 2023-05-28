<script setup lang="ts">

interface Props {
  label: string;
  placeholder?: string;
  value?: string;
  type: string;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    type: "text"
  }
)

interface Emits {
  (event: "update:value", value: string): void;
}
const emits = defineEmits<Emits>();

const onInputChange = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  emits("update:value", input.value);
}

</script>

<template>
  <div class="input-item">
    <label>{{ label }}</label>
    <template v-if="type == 'text'">
      <input type="text" :placeholder=props.placeholder v-on:input="onInputChange">
    </template>
    <template v-else-if="type == 'textarea'">
      <textarea cols="30" rows="10" v-on:input="onInputChange"></textarea>
    </template>
  </div>
</template>

<style scoped>
.input-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
}
.input-item__label {
  flex-grow: 3;
}
.input-item__input {
  flex-grow: 2;
}
</style>