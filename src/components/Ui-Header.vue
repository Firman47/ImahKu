<template>
  <header
    class="w-full shadow-sm flex justify-between sticky top-0 z-20 py-4 bg-white items-center px-responsive"
  >
    <h1 class="text-3xl font-extrabold text-primary-main">Imahku</h1>

    <button @click="navActive = !navActive">
      <UiIcons name="menu" className="w-8 h-8 fill-primary-main sm:hidden" />
    </button>

    <nav
      id="nav-acitve"
      class="w-full bg-white sm:hidden absolute top-[68px] left-0 shadow-sm"
      :class="{
        'h-fit': navActive,
        'max-h-0 overflow-hidden': !navActive,
      }"
    >
      <div class="flex flex-col items-center justify-center w-full gap-4 p-4">
        <label
          v-for="(tab, index) in tabs"
          :key="index"
          class="cursor-pointer p-1 transition duration-300 text-lg font-bold s text-center"
          :class="{
            'text-primary-dark border-b-[1.5px] border-primary-main': selectedTab === index,
          }"
        >
          <input
            type="radio"
            name="tabs"
            class="hidden"
            :id="`tab-${index}`"
            :checked="selectedTab === index"
            @click="selectedTab = index"
          />
          <span>{{ tab.label }}</span>
        </label>
      </div>
    </nav>

    <nav class="gap-8 hidden sm:flex">
      <label
        v-for="(tab, index) in tabs"
        :key="index"
        class="cursor-pointer p-1 transition duration-300 text-lg font-bold"
        :class="{
          'text-primary-dark border-b-[1.5px] border-primary-main': selectedTab === index,
        }"
      >
        <input
          type="radio"
          name="tabs"
          class="hidden"
          :id="`tab-${index}`"
          :checked="selectedTab === index"
          @click="selectedTab = index"
        />
        <span>{{ tab.label }}</span>
      </label>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiIcons from '@/components/Ui-Icons.vue'
const navActive = ref(false)

const selectedTab = ref(0)

const tabs = [
  { label: 'Home' },
  { label: 'Listing' },
  { label: 'About Us' },
  { label: 'Get In Touch' },
]
</script>

<style scoped>
#nav-acitve {
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}
</style>
