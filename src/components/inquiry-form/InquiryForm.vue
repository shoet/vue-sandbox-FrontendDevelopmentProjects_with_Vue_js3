<script setup lang="ts">
import { reactive } from 'vue';
import InputField from './InputField.vue';
import Result from './Result.vue';

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const data = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})
</script>

<template>
  <div class="input-form-container">
    <div class="input-container">
      <InputField :name="'name'" v-model:value="data.name" data-testid="field-name"/>
      <InputField :name="'email'" v-model:value="data.email" data-testid="field-email"/>
      <InputField :name="'phone'" v-model:value="data.phone" data-testid="field-phone"/>
      <InputField :name="'subject'" v-model:value="data.subject" data-testid="field-subject"/>
      <InputField :name="'message'" v-model:value="data.message" data-testid="field-message"/>
    </div>
    <div class="result-container" data-testid="result-area">
      <Result :data="data"/>
    </div>
    <!-- <div class="result-container">
      <Result :data="data" data-testid="result-area"/>
    </div> -->
  </div>
</template>

<style scoped>
.input-form-container {
  display: flex;

}
.input-container {
  width: 50%;

}
.result-container {
  width: 50%;
}
</style>