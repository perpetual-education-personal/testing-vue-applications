import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import AuthorizedStatus from '../AuthorizedStatus.vue';

describe('AuthorizedStatus.vue', function () {
  test('renders component s', function () {
    const wrapper = shallowMount(AuthorizedStatus);
    const p = wrapper.get('p');
    expect(p.text()).toContain('Hello');
  });
});
