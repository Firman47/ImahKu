<template>
  <div class="w-[381px] max-h-[492px]">
    <div class="w-full overflow-hidden space-y-5">
      <div class="relative">
        <img :src="img" alt="Mystical Home" class="w-full object-cover rounded-xl" />
        <div
          class="bg-primary-light rounded-md px-2 py-1 absolute top-[14px] right-[21.67px] text-sm font-bold"
        >
          {{ price }}
        </div>
      </div>
      <div>
        <h1 class="font-bold text-2xl">{{ title }}</h1>

        <p class="text-gray-500">
          {{ description }}
        </p>

        <div class="flex items-center justify-start gap-3 mt-[10px]">
          <p class="flex items-center gap-2 h-8">
            <UiIcons name="bed" className="w-6 h-6 fill-gray-500 text-primary-main" /> {{ bad }} Bed
          </p>

          <div class="bg-gray-500 w-[.8px] h-6"></div>

          <p class="flex items-center gap-2 h-8">
            <UiIcons name="tub" className="w-6 h-6 fill-gray-500 text-primary-main" /> {{ tub }} Tub
          </p>

          <div class="bg-gray-500 w-[.8px] h-6"></div>

          <p class="flex items-center gap-2 h-8">
            <UiIcons name="ruler" className="w-6 h-6 fill-gray-500 text-primary-main" />
            {{ ruler }} m2
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiIcons from './Ui-Icons.vue'

defineProps({
  img: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bad: {
    type: String,
    required: true,
  },
  tub: {
    type: String,
    required: true,
  },
  ruler: {
    type: String,
    required: true,
  },
})
</script>
