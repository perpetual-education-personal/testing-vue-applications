<script setup>
defineProps(['things']);
</script>

<template>
  <ul>
    <li v-for="thing in things">
      {{ thing.name }}
    </li>
  </ul>
</template>
