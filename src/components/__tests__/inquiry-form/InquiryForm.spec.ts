import { describe, test, expect } from 'vitest';
import { shallowMount, mount } from '@vue/test-utils';

import InquiryForm from '@/components/inquiry-form/InquiryForm.vue';
import InputField from '@/components/inquiry-form/InputField.vue';
import Result from '@/components/inquiry-form/Result.vue';

describe('InquiryForm', () => {
  test('field init', () => {
    const wrapper = mount(InquiryForm);

    let actual = wrapper.find(`[data-testid="field-name"]`).text();
    expect(actual).toBe('name');

    actual = wrapper.find(`[data-testid="field-email"]`).text();
    expect(actual).toBe('email');

    actual = wrapper.find(`[data-testid="field-phone"]`).text();
    expect(actual).toBe('phone');

    actual = wrapper.find(`[data-testid="field-subject"]`).text();
    expect(actual).toBe('subject');

    actual = wrapper.find(`[data-testid="field-message"]`).text();
    expect(actual).toBe('message');
  });


  test('input field', async () => {
    const wrapper = mount(InquiryForm, {});

    const input = 'hoge';

    // componentにdata-testidを仕掛ける
    const inputField = wrapper.find('[data-testid="field-name"]');
    // DOMからコンポーネントを取り出す
    const fieldComponent = inputField.findComponent(InputField);
    // コンポーネントのemitを発火する v-modelを通してemitを発火しているので以下で呼び出し
    await fieldComponent.vm.$emit('update:value', 'hoge');

    // data-testidを一つ上のDOMに仕掛けないとfindComponentが失敗してしまうことがある
    const resultComponent = wrapper.findComponent(Result);
    const actual = resultComponent.text();

    expect(actual).toBe(input);
  });
})