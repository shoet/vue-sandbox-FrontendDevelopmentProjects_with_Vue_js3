import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '@/views/TodoView.vue';
import LayoutView from '@/views/LayoutView.vue';
import Covid19View from '@/views/Covid19View.vue';
import SlotPracticeView from "@/views/SlotPracticeView.vue";
import ECMinimumView from "@/views/ec-minimum/ECMinimumView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoView
  },
  {
    path: '/layout',
    name: 'layout',
    component: LayoutView
  },
  {
    path: '/slot-plactice',
    name: 'slot-plactice',
    component: SlotPracticeView
  },
  {
    path: '/covid19',
    name: 'covid19',
    component: Covid19View
  },
  {
    path: '/ecminimum',
    component: import('@/views/ec-minimum/ECMinimumView.vue'),
    redirect: '/ecminimum/productList',
    children: [
      {
        path: 'productList',
        name: 'productList',
        component:  import('@/views/ec-minimum/ProductList.vue'),
        strict: true
      },
      {
        path: 'cart',
        name: 'cart',
        component: import('@/views/ec-minimum/CartView.vue'),
        strict: true
      },
      {
        path: 'about',
        name: 'about',
        component: import('@/views/ec-minimum/AboutView.vue'),
        strict: true
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
