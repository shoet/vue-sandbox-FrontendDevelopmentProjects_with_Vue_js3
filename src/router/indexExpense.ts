import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import ExpenseManagementView from "@/views/expense-management/ExpenseManagementView.vue";
import ExpenseManagementMain from "@/views/expense-management/ExpenseManagementMain.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: ExpenseManagementView,
    redirect: '/main',
    children: [
      {
        path: '/main',
        name: 'expense-main',
        component: ExpenseManagementMain,
      }
    ]
  },
]


const routeExpense = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default routeExpense;