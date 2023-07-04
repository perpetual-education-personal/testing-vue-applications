import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import ListOfThings from '../ListOfThings.vue';

const thingsData = [
  {
    id: 1,
    name: 'Derek',
  },
  {
    id: 2,
    name: 'Ivy',
  },
  {
    id: 3,
    name: 'Valentine',
  },
];

describe('ListOfThings.vue', function () {
  // is there a reason to ever check for "can mount" etc? if these other tests inherently cover that?

  test('list length', function () {
    const wrapper = shallowMount(ListOfThings, {
      props: {
        things: thingsData,
      },
    });

    const items = wrapper.findAll('li');
    expect(items.length).toBe(thingsData.length);
    // feels a little blind! How do you know if your test is written properly...
    // also if there's no template in the component... that is a show stopper...
    // but it does say expected 3 recieved 0 ...
  });

  test('item has correct name', function () {
    const wrapper = shallowMount(ListOfThings, {
      props: {
        things: thingsData,
      },
    });

    const item = wrapper.find('li:nth-of-type(2)');
    expect(item).toContain('Ivy');
    // or thingsData[1].name ?
    // Cannot call Symbol(Symbol.toStringTag) on an empty DOMWrapper. hmmmm
  });
});
