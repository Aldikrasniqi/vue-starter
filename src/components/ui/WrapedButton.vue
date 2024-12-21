<script lang="ts" setup>
const props = defineProps<{
  type: 'button' | 'submit' | 'reset'
  title: string
  onClick: () => void
  className?: string
}>()
</script>

<template>
  <button
    :type="props.type"
    :class="`px-4 py-2 bg-blue-500 text-white rounded-lg ${props.className}`"
    @click="props.onClick"
  >
    {{ props.title }}
  </button>
</template>
