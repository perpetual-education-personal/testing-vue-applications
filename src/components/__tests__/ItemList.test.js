import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ItemList from "@/components/ItemList.vue";

describe("ItemList.vue", () => {
	test("renders an item for each item in window.items", function () {
		window.items = [{}, {}, {}]; // 3
		// does this need to be on the window? And if so, why?

		const wrapper = shallowMount(ItemList, {
			props: {
				items: window.items,
			},
		});

		expect(wrapper.findAll(".item").length).toBe(window.items.length);
		///                               toHaveLength
	});
});
