import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Message from '@/components/Message.vue';

describe('Message', () => {
  it('renders properly', () => {
    const wrapper = mount(Message as any, {
      props: { 
        msg: 'hoge', 
        data: 'fuga'
      }})
    expect(wrapper.text()).toContain('hoge')
  })
})
