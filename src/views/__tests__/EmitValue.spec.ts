import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import EmitView from '../EmitView.vue';

describe('EmitView', () => {
  test('初期表示', () => {
    const wrapper = mount(EmitView as any);
    const actual = wrapper.get('[data-testid="numFromParent"]').text();
    const expected = '0';
    expect(actual).toBe(expected);
  })

  test('加算 複数ボタン', async () => {
    const wrapper = mount(EmitView as any);

    await wrapper.get('[data-testid="emit-value-component"]').trigger('click');
    await wrapper.get('[data-testid="emit-value-component-vmodel"]').trigger('click');

    const actual = wrapper.get('[data-testid="numFromParent"]').text();
    const expected = '2';
    expect(actual).toBe(expected);
  })
})

describe('EmitValueComponent', () => {
  test('加算', async () => {
    const wrapper = mount(EmitView as any);
    // ボタンのクリック
    await wrapper.get('[data-testid="emit-value-component"]').trigger('click');
    const actual = wrapper.get('[data-testid="numFromParent"]').text();
    const expected = '1';
    expect(actual).toBe(expected);
  })
})

describe('EmitValueComponentVModel', () => {
  test('加算', async () => {
    const wrapper = mount(EmitView as any);
    // ボタンのクリック
    await wrapper.get('[data-testid="emit-value-component-vmodel"]').trigger('click');
    const actual = wrapper.get('[data-testid="numFromParent"]').text();
    const expected = '1';
    expect(actual).toBe(expected);
  })
})