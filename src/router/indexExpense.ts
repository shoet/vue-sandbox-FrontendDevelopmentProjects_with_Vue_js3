import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import ExpenseManagementView from "@/views/expense-management/ExpenseManagementView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'expense',
    component: ExpenseManagementView
  },
]


const routeExpense = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default routeExpense;