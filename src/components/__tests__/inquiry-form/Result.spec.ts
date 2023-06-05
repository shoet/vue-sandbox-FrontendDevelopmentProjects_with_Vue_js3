import { describe, test, expect } from 'vitest';
import { shallowMount, mount } from '@vue/test-utils';

import Result from '@/components/inquiry-form/Result.vue';
import type { InquiryForm } from '@/components/inquiry-form/InquiryForm.vue';

describe('result', () => {
  test('表示', () => {

    const data: InquiryForm = {
        name: 'name',
        email: 'email',
        phone: 'phone',
        subject: 'subject',
        message: 'message',
    }

    const propsData = {
      data: data
    }

    const wrapper = shallowMount(Result, {
      props: propsData
    });

    const text = wrapper.text();

    const actual1 = text.includes(data.name);
    expect(actual1).toBe(true);
    const actual2 = text.includes(data.email);
    expect(actual2).toBe(true);
    const actual3 = text.includes(data.phone);
    expect(actual3).toBe(true);
    const actual4 = text.includes(data.subject);
    expect(actual4).toBe(true);
    const actual5 = text.includes(data.message);
    expect(actual5).toBe(true);
    
  });
});