import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import AuthorizedStatus from '../AuthorizedStatus.vue';

describe('AuthorizedStatus.vue without props', function () {
  const wrapper = shallowMount(AuthorizedStatus);
  test('authorized text', function () {
    expect(wrapper.text()).toContain('No');
  });
});

describe('AuthorizedStatus.vue with props', function () {
  const wrapper = shallowMount(AuthorizedStatus, {
    props: {
      authorized: true,
    },
  });

  test('unauthorized text', function () {
    expect(wrapper.text()).toContain('Yes');
  });

  test('authorized class', function () {
    expect(wrapper.classes()).toContain('active');
  });
});
