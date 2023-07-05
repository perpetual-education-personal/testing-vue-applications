<script setup>
import { ref } from "vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ItemList from "@/components/ItemList.vue";

const itemsData = ref([
  {
    title: "Amazing new design agency",
    href: "https://reputable.agency",
  },
  {
    title: "Important news!",
    href: "https://sheriffderek.consulting",
  },
  {
    title:
      "Radical web development school. Can you make it through withouth crying?",
    href: "https://perpetual.education",
  },
]);
</script>

<template>
  <div class="app">
    <ProgressBar />

    <ItemList :items="itemsData" />
  </div>
</template>

<style>
.app {
  display: grid;
  gap: 10px;
}
</style>
