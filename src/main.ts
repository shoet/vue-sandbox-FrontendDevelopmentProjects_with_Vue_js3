import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import GlobalCompTest from '@/components/GlobalCompTest.vue';

import App from './App.vue'
// import router from './router'
import indexExpense from './router/indexExpense'

const app = createApp(App)

app.component('GlobalCompTest', GlobalCompTest);

app.use(createPinia())

// app.use(router)
app.use(indexExpense);

app.mount('#app')
