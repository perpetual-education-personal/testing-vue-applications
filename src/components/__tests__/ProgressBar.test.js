import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ProgressBar from "@/components/ProgressBar.vue";

describe("ProgressBar.vue", () => {
	test("displays the bar when start is called", () => {
		const wrapper = shallowMount(ProgressBar);
		expect(wrapper.classes()).toContain("hidden");
		wrapper.vm.start();
		expect(wrapper.classes()).not.toContain("hidden");
	});
});
