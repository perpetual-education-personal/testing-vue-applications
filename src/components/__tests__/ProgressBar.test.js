import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ProgressBar from "@/components/ProgressBar.vue";

describe("ProgressBar.vue", () => {
	test("displays the bar when start is called", async () => {
		const wrapper = shallowMount(ProgressBar);
		expect(wrapper.classes()).toContain("hidden");
		await wrapper.vm.start();
		expect(wrapper.classes()).not.toContain("hidden");
	});

	test("sets the bar to 100% when finished is called", async () => {
		const wrapper = shallowMount(ProgressBar);
		// await wrapper.vm.start();
		await wrapper.vm.finish();
		expect(wrapper.element.style.width).toBe("100%");
	});

	test("hides the bar when finish is called", async () => {
		const wrapper = shallowMount(ProgressBar);
		await wrapper.vm.finish();
		expect(wrapper.classes()).toContain("hidden");
	});

	test("should reset the width when start is called", async () => {
		const wrapper = shallowMount(ProgressBar);
		// await wrapper.vm.finish();
		await wrapper.vm.start();
		expect(wrapper.element.style.width).toBe("0%");
	});
});
