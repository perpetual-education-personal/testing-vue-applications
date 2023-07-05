<script setup>
defineProps(["things"]);
</script>

<template>
  <ul class="list-of-things" style="color: purple">
    <li v-for="thing in things">
      {{ thing.name }}
    </li>
  </ul>
</template>

<style>
.list-of-things {
  border: 1px solid gray;
  padding: 10px;
}
</style>
