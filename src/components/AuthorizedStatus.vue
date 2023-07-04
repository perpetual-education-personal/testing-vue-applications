<script setup>
defineProps({
  theContent: {
    type: String,
    default: 'Default content',
  },
});
</script>

<template>
  <div>
    <p>{{ theContent }}</p>
  </div>
</template>
