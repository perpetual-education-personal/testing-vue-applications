<script setup>
import { ref } from "vue";

const hidden = ref(true);
const percent = ref(0);

function start() {
	hidden.value = false;
	percent.value = 0;
}

function finish() {
	hidden.value = true;
	percent.value = 100;
}
</script>

<template>
	<div
		class="progress-bar"
		:class="{ hidden: hidden }"
		:style="`width: ${percent}%`"
	></div>
</template>

<style>
.progress-bar {
	min-height: 8px;
	border: 1px solid gray;
}
.progress-bar.hidden {
	opacity: 0.5;
	pointer-events: none;
	border-color: red;
}
</style>
