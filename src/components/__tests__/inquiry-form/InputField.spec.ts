import { describe, test, expect } from 'vitest';
import { shallowMount, mount } from '@vue/test-utils';

import InputField from '@/components/inquiry-form/InputField.vue';

describe('InputField', () => {
  test('初期表示', () => {
    const propsData = {
      name: 'field name',
      value: '',
    };

    const wrapper = shallowMount(InputField, {
      props: propsData,
    });

    const actual = wrapper.text();

    expect(actual).toMatch("field name");
  });

  test('入力', async () =>  {
    const wrapper = mount(InputField)

    // 対象のinputにdata-testidを仕掛ける
    const textInput = wrapper.find('[data-testid="input-value"]')
    await textInput.setValue('some value')
  
    const element = wrapper.find('input[type="text"]').element as HTMLInputElement;
    expect(element.value).toBe('some value')
  });
});