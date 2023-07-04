import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import AuthorizedStatus from '../AuthorizedStatus.vue';

describe('AuthorizedStatus.vue', function () {
  test('Custom content works', function () {
    const wrapper = shallowMount(AuthorizedStatus, {
      props: {
        theContent: 'My Content',
      },
    });
    const p = wrapper.get('p');
    expect(p.text()).toContain('My Content');
  });

  test('Default content works', function () {
    const wrapper = shallowMount(AuthorizedStatus);
    const p = wrapper.get('p');
    expect(p.text()).toContain('Default content');
  });
});

// note that you can additionally check prop values using validators and other built-in Vue ways
