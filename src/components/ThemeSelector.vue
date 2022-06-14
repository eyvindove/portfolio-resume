<script setup>
import { WindowBlackSaturation } from '@vicons/carbon'

const emit = defineEmits(['toggleTheme'])
</script>

<template>
  <div>
    <n-button-group size="small">
      <n-button class="px-4" @click="emit('toggleTheme', 'light')">Light</n-button>
      <n-button class="px-2" round>
        <n-icon :component="WindowBlackSaturation" />
      </n-button>
      <n-button class="px-4" @click="emit('toggleTheme', 'dark')">Dark</n-button>
    </n-button-group>
  </div>
</template>
