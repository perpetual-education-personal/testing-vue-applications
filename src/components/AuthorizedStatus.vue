<script setup>
defineProps({
  authorized: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="authorized-status" :class="{ active: authorized }">
    <p>{{ authorized ? 'Yes' : 'No' }}</p>
  </div>
</template>

<style>
.authorized-status {
  border: 1px solid gray;
  padding: 10px;
  color: red;
}
.authorized-status.active {
  color: green;
}
</style>
