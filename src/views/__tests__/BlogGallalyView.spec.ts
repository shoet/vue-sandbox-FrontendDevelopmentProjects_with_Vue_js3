import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import BlogGallalyView from '../BlogGallalyView.vue';
import BlogSearchField from '@/components/BlogSearchField.vue';
import BlogList from '@/components/BlogList.vue';

describe('BlogGallalyView', () => {
  test('初期表示', () => {
    const wrapper = mount(BlogGallalyView);
    const actual = (): boolean => {
      const text1 = wrapper.text().includes('blog1');
      const text2 = wrapper.text().includes('blog2');
      const text3 = wrapper.text().includes('blog3');
      const text4 = wrapper.text().includes('blog4');
      const text5 = wrapper.text().includes('blog5');
      return text1 && text2 && text3 && text4 && text5;
    };
    const expected = true;
    expect(actual()).toBe(expected);
  });
});


describe('BlogGallalyView', () => {
  test('フィルタ1', async () => {
    const options = {
      global: {
        stubs: {
          BlogSearchField: true
        }
      }
    }
    const wrapper = mount(BlogGallalyView, options);
    const blogSearchFieldComponent = wrapper.findComponent(BlogSearchField);

    await blogSearchFieldComponent.vm.$emit('update:keyword', '1');

    const actual = wrapper.text().includes('blog1');
    const expected = true;
    expect(actual).toBe(expected);
  });

  test('フィルタ2', async () => {
    const options = {
      global: {
        stubs: {
          BlogSearchField: true
        }
      }
    }
    const wrapper = mount(BlogGallalyView, options);
    const blogSearchFieldComponent = wrapper.findComponent(BlogSearchField);

    await blogSearchFieldComponent.vm.$emit('update:keyword', '2');

    const actual = wrapper.text().includes('blog1');
    const expected = false;
    expect(actual).toBe(expected);
  });

  test('フィルタ3', async () => {
    const options = {
      global: {
        stubs: {
          BlogSearchField: true
        }
      }
    }
    const wrapper = mount(BlogGallalyView, options);

    const blogSearchFieldComponent = wrapper.findComponent(BlogSearchField);
    await blogSearchFieldComponent.vm.$emit('update:keyword', '2');

    const actual = wrapper.text().includes('blog2');
    const expected = true;
    expect(actual).toBe(expected);
  });
});

