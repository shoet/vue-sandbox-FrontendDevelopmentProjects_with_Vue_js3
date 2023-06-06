import { describe, test, expect, beforeEach, vi } from 'vitest';
import { shallowMount, mount, flushPromises } from '@vue/test-utils';
import TodoJsonplaceholderView from '@/views/todo_jsonplaceholder/TodoJsonplaceholderView.vue';
import router from '@/router';
import App from '@/App.vue';
import { createPinia, setActivePinia } from 'pinia';
import { useJsonplaceholder } from '@/stores/todo_jsonplaceholder/useJsonplaceholder';

describe('TodoJsonplaceholderView', () => {
  let store: any;

  beforeEach( async () => {
    setActivePinia(createPinia());
    store = useJsonplaceholder();
  });

  test('router', async () => {
    router.push('/')
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    });
    await store.fetchTodo();
    await flushPromises();
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).not.toMatch('loading...');
  });

  test('component', async () => {
    const wrapper = mount(TodoJsonplaceholderView);
    await store.fetchTodo();
    // await wrapper.vm.$nextTick();
    // await flushPromises();
    expect(wrapper.text()).not.toMatch('loading...');
  });
});