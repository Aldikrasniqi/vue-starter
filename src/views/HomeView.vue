<script setup lang="ts">
import WrapedButton from '@/components/ui/WrapedButton.vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <main>
    <h1 class="text-2xl font-bold tracking-tighter">
      This is home page test
    </h1>
    <p class="text-gray-600 dark:text-gray-300">
      Counter: {{ store.count }}
    </p>
    <div class="flex mt-2">
      <WrapedButton type="button" title="Increment" class-name="mr-2" :on-click="store.increment" />
      <WrapedButton type="button" title="Decrement" class-name="mr-2" :on-click="store.decrement" />
    </div>
  </main>
</template>
