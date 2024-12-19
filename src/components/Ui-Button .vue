<template>
  <button
    v-if="variant === 'main'"
    class="border-2 font-extrabold text-base border-primary-main bg-primary-main text-white px-6 py-3 rounded-lg hover:bg-primary-main/90 hover:border-primary-main/90 transition-all duration-300 ease-in-out"
  >
    <slot />
  </button>

  <button
    v-else-if="variant === 'outline'"
    class="border-2 font-extrabold text-base border-primary-main text-primary-main px-6 py-3 rounded-lg hover:bg-primary-main hover:border-primary-main hover:text-white transition-all duration-300 ease-in-out"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'main', // Default variant jika tidak diatur
  },
})
</script>
