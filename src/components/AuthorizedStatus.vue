<script setup>
defineProps({
  authorized: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div>
    <p>{{ authorized ? 'Yes' : 'No' }}</p>
  </div>
</template>
