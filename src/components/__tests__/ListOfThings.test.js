import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ListOfThings from "../ListOfThings.vue";

const thingsData = [
  {
    id: 1,
    name: "Derek",
  },
  {
    id: 2,
    name: "Ivy",
  },
  {
    id: 3,
    name: "Valentine",
  },
];

describe("ListOfThings.vue with items", function () {
  const wrapper = shallowMount(ListOfThings, {
    props: {
      things: thingsData,
    },
  });

  test("list length", function () {
    const items = wrapper.findAll("li");
    expect(items.length).toBe(thingsData.length);
  });

  test("item has correct name", function () {
    const item = wrapper.find("li:nth-of-type(2)");
    expect(item.text()).toContain(thingsData[1].name);
  });

  test("example inline-style check", function () {
    expect(wrapper.element.style.color).toBe("purple");
  });
});
