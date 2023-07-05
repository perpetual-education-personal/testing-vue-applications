<script setup>
import Item from "@/components/Item.vue";

defineProps(["items"]);
</script>

<template>
	<ul class="item-list">
		<li class="item" v-for="item in items">
			<Item :item="item" />
		</li>
	</ul>
</template>

<style>
.item-list {
	display: grid;
	gap: 10px;
}
</style>
