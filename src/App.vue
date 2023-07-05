<script setup>
import { ref } from "vue";
import ItemList from "@/components/ItemList.vue";

const itemsData = ref([
  {
    title: "test",
    hrem: "Derek",
  },
  {
    title: 2,
    hrem: "Ivy",
  },
  {
    title: 3,
    hrem: "Valentine",
  },
]);
</script>

<template>
  <div class="app">
    <ItemList :items="itemsData" />
  </div>
</template>

<style>
.app {
  display: grid;
  gap: 10px;
}
</style>
