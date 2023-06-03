import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '@/views/TodoView.vue';
import LayoutView from '@/views/LayoutView.vue';
import Covid19View from '@/views/Covid19View.vue';
import SlotPracticeView from "@/views/SlotPracticeView.vue";
import ECMinimumView from "@/views/ec-minimum/ECMinimumView.vue";
import TabExampleView from '@/views/tab-example/TabExampleView.vue'
import TransitionExample from '@/views/transition-example/TransitionExampleView.vue';

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
    path: '/tabExample',
    name: 'tabExample',
    component: TabExampleView,
    redirect: '/tabExample/tab1',
    children: [
      {
        path: 'tab1',
        name: 'tab1',
        component:  import('@/components/tab-example/TabExampleTab1.vue'),
        strict: true,
      },
      {
        path: 'tab2',
        name: 'tab2',
        component:  import('@/components/tab-example/TabExampleTab2.vue'),
        strict: true,
      },
      {
        path: 'tab3',
        name: 'tab3',
        component:  import('@/components/tab-example/TabExampleTab3.vue'),
        strict: true,
      },
    ]
  },
  {
    path: '/transitionExample',
    name: 'transitionExample',
    component: TransitionExample
  },
  {
    path: '/ecminimum',
    component: import('@/views/ec-minimum/ECMinimumView.vue'),
    redirect: '/ecminimum/product',
    children: [
      {
        path: 'product',
        name: 'product',
        component:  import('@/views/ec-minimum/ProductList.vue'),
        strict: true,
      },
      {
        path: 'product/:id',
        name: 'detail',
        component:  import('@/views/ec-minimum/ProductDetailView.vue'),
        strict: true,
        props: true,
        // props: (routes) => {
        //   console.log(routes.params.id);
        //   return {
        //     id: routes.params.id
        //   }
        // }
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
