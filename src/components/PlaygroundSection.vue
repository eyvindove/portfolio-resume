<script setup>
import { useOpenLink } from '@/use/openLink'
import vue3TodoListImage from '@/assets/playground/vue3-todolist.png'
import reactWeatherAppImage from '@/assets/playground/react-weather-app.png'

const playgroundList = [
  {
    id: 'vue3-todolist',
    title: 'Vue3 Todo List',
    content: 'A Todo List is created with Vue3, Vite, Typescript and TailwindCSS.',
    image: vue3TodoListImage,
    href: 'https://master.d2o7cksds4b7ta.amplifyapp.com/',
  },
  {
    id: 'react-weather-app',
    title: 'React Weather App',
    content: 'Build up a simple app with React.js & Redux for checking the weather of major cities in Taiwan.',
    image: reactWeatherAppImage,
    href: 'https://eyvindove.github.io/react-weather/',
  },
]
</script>

<template>
  <div class="section">
    <n-h3 id="playground">Playground</n-h3>

    <div class="flex flex-wrap justify-center md:justify-start gap-4">
      <n-card
        v-for="item in playgroundList"
        :key="item.id"
        class="w-[300px] max-h-[360px]"
      >
        <template #cover>
          <n-image :src="item.image" />
        </template>

        <template #header>
          <div>{{ item.title }}</div>
        </template>

        <template #default>
          <div>{{ item.content }}</div>
          <n-button class="mt-4" @click="useOpenLink(item.href)">Live Demo</n-button>
        </template>
      </n-card>
    </div>
  </div>
</template>
