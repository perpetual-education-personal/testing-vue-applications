import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import AuthorizedStatus from '../AuthorizedStatus.vue';

describe('AuthorizedStatus.vue', function () {
  test('authorized text', function () {
    const wrapper = shallowMount(AuthorizedStatus);
    expect(wrapper.text()).toContain('No');
  });

  test('unauthorized text', function () {
    const wrapper = shallowMount(AuthorizedStatus, {
      props: {
        authorized: true,
      },
    });
    expect(wrapper.text()).toContain('Yes');
  });

  test('authorized class', function () {
    const wrapper = shallowMount(AuthorizedStatus, {
      props: {
        authorized: true,
      },
    });
    expect(wrapper.classes()).toContain('active');
  });
});
