<script setup>
import {
  ref,
} from 'vue'
import {
  NConfigProvider,
  darkTheme,
} from 'naive-ui'

const theme = ref(darkTheme)

const toggleTheme = (activeTheme) => {
  return theme.value = activeTheme === 'dark' ? darkTheme : null
}
</script>

<template>
  <n-config-provider
    :theme="theme"
  >
    <router-view @toggle-theme="toggleTheme" />
  </n-config-provider>
</template>
