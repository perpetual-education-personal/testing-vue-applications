<script setup>
defineProps({
  authorized: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="{ active: authorized }">
    <p>{{ authorized ? 'Yes' : 'No' }}</p>
  </div>
</template>
