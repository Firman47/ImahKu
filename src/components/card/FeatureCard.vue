<template>
  <div class="space-y-4">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p class="text-base font-normal text-gray-500">
      {{ description }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
