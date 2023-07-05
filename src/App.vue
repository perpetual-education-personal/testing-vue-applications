<script setup>
import { ref } from "vue";
import AuthorizedStatus from "@/components/AuthorizedStatus.vue";
import ListOfThings from "@/components/ListOfThings.vue";

const thingsData = ref([
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
]);
</script>

<template>
  <div class="app">
    <AuthorizedStatus />
    <AuthorizedStatus authorized="true" />

    <ListOfThings />

    <ListOfThings :things="thingsData" />
  </div>
</template>

<style>
.app {
  display: grid;
  gap: 10px;
}
</style>
