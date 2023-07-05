<script setup>
defineProps(["item"]);
</script>

<template>
	<div class="item-card">
		<a :href="item.href">{{ item.title }}</a>
	</div>
</template>

<style>
.item-card {
	border: 1px solid gray;
	padding: 8px;
}
</style>
