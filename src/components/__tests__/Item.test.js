import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import Item from "../Item.vue";

describe("Item.vue", () => {
	const itemData = {
		title: "perpetual.education",
		href: "https://perpetual.education",
	};

	test("renders link to item.url with item.title as text", () => {
		const wrapper = shallowMount(Item, {
			props: {
				item: itemData,
			},
		});
		const a = wrapper.find("a");
		expect(a.text()).toBe(itemData.title);
		expect(a.attributes().href).toBe(itemData.href);
	});
});
