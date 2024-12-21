<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/ui/NavigationBar.vue'
import SectionLayout from './layouts/SectionLayout.vue'
</script>

<template>
  <NavigationBar />
  <SectionLayout>
    <RouterView />
  </SectionLayout>
</template>
