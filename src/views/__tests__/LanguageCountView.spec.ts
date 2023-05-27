import { describe, test, expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';

import LanguageCountViewVue from '../LanguageCountView.vue';
import LanguageCountInputField from '@/components/LanguageCountInputField.vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    output: any
  }
}

describe('LanguageCountView', () => {
  test('初期表示', () => {
    const wrapper = mount(LanguageCountViewVue);
    const actual = wrapper.text().includes('LanguageCountView');
    expect(actual).toBe(true);
  });

  test('出力1', async () => {
    const wrapper = mount(LanguageCountViewVue);
    await wrapper.find('[data-testid="input-firstName"').setValue('shoetsu');
    await wrapper.find('[data-testid="input-lastName"').setValue('kawasato');

    const fullName = wrapper.find('[data-testid="result-fullName"').text();

    expect(fullName).toBe('fullName: shoetsukawasato');
  });

  test('出力2', async () => {
    const wrapper = mount(LanguageCountViewVue);
    await wrapper.find('[data-testid="input-firstName"').setValue('shoetsu');
    await wrapper.find('[data-testid="input-lastName"').setValue('kawasato');

    const count = wrapper.find('[data-testid="result-count"').text();

    expect(count).toBe('count: 15');
  })
});