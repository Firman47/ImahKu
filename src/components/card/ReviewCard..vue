<template>
  <div class="space-y-5 p-8 w-full bg-white shadow-sm rounded-lg">
    <div class="flex items-center gap-4 justify-start">
      <img :src="img" :alt="alt" class="rounded-full w-16 h-16 object-cover" />

      <div>
        <h1 class="text-xl font-bold text-primary-main">{{ name }}</h1>
        <p class="text-gray-500">{{ role }}</p>
      </div>
    </div>

    <p class="text-primary-main text-base">
      {{ testimonial }}
    </p>

    <di class="flex items-center justify-between">
      <p class="text-gray-500">{{ date }}</p>

      <div class="flex items-center gap-2">
        <UiIcons v-for="index in star" :key="index" name="star" className="w-5 h-5" />
      </div>
    </di>
  </div>
</template>
<script setup lang="ts">
import UiIcons from '../Ui-Icons.vue'
defineProps({
  img: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  testimonial: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    required: true,
  },
})
</script>
