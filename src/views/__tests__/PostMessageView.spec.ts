
import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import PostMessageView from '@/views/PostMessageView.vue'
import Messages from '@/components/PostMessageView/Messages.vue';
import MessageEditor from '@/components/PostMessageView/MessageEditor.vue';

describe('PostMessageView', () => {
  test('初期表示', () => {
    const wrapper = mount(PostMessageView);
    const actual = wrapper.get('h1').text();
    const expected = 'Post Message View';
    expect(actual).toBe(expected);
  });

  test('Message post', async () => {
    const wrapper = mount(PostMessageView);
    await wrapper.find('[data-testid="message-editor__textarea"]').setValue('hoge');
    await wrapper.find('[data-testid="message-editor__button"').trigger('click');
    const actual = wrapper.find('[data-testid="messages-container"').text();
    const expected = 'hoge';
    expect(actual).toBe(expected);
  })
});

describe('Messages', () => {
  test('初期表示', () => {
    const wrapper = mount(Messages);
    const actual = wrapper.get('[data-testid="messages-container"]').text();
    const expected = '';
    expect(actual).toBe(expected);
  });
});

describe('MessageEditor', () => {
  test('初期表示 textarea', () => {
    const wrapper = mount(MessageEditor);
    const actual = wrapper.get('[data-testid="message-editor__textarea"]').text();
    const expected = '';
    expect(actual).toBe(expected);
  });

  test('入力 textarea', async () => {
    const wrapper = mount(MessageEditor);
    await wrapper.find('[data-testid="message-editor__textarea"]').setValue('hoge');
    const elementTextArea = wrapper.find('[data-testid="message-editor__textarea"]').element as HTMLInputElement;
    const actual = elementTextArea.value;
    const expected = 'hoge';
    expect(actual).toBe(expected);
  });

  test('初期表示 button', () => {
    const wrapper = mount(MessageEditor);
    const actual = wrapper.get('[data-testid="message-editor__button"]').text();
    const expected = 'Post';
    expect(actual).toBe(expected);
  });
});