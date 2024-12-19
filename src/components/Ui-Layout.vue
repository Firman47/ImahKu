<template>
  <div>
    <UiHeader />
    <main>
      <slot />
    </main>
    <UiFooter />
  </div>
</template>

<script setup lang="ts">
import UiHeader from '@/components/Ui-Header.vue'
import UiFooter from '@/components/Ui-Footer.vue'
</script>
