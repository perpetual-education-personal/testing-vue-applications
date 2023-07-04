import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AuthorizedStatus from '../AuthorizedStatus.vue';

describe('AuthorizedStatus.vue', function () {
  test('renders component', function () {
    const wrapper = mount(AuthorizedStatus);
    const p = wrapper.get('p');
    expect(p.text()).toBe('Hello');
  });
});
