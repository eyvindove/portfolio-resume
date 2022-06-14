<script setup>
import { useOpenLink } from '@/use/openLink'

const options = [
  {
    title: 'Master of Engineering, Electrical and Computer Engineering',
    name: 'Tamkang University',
    content: 'Thesis - Hardware/Software Co-Design of Pick and Place Operations for Path Planning',
    time: 'Feb. 2011 ~ Jan. 2014',
  },
  {
    title: 'Short-term Exchange Study Program - JUSST',
    name: 'Miracle Information Technology Inc.',
    content: 'Japanese University Studies in Science & Technology (JUSST)',
    time: 'Apr. 2012 ~ Mar. 2013',
    link: ['JUSST', 'http://www.fedu.uec.ac.jp/en/future_students/jusst/'],
  },
  {
    title: 'Bachelor of Engineering, Electrical and Computer Engineering',
    name: 'Tamkang University',
    content: '',
    time: 'Sep. 2006 ~ Jan. 2011',
  },
]
</script>

<template>
  <div class="section">
    <n-h3 id="education">Education</n-h3>

    <n-timeline class="mt-4">
      <n-timeline-item
        v-for="item in options"
        :key="item.name"
        :title="item.title"
        :content="item.content"
        :time="item.time"
      >
        <template #default>
          <div class="text-xs italic">{{ item.name}}</div>
          <div class="mt-1">{{ item.content }}</div>
          <n-button
            v-if="item.link"
            class="mt-1"
            size="tiny"
            @click="useOpenLink(item.link[1])"
          >
            {{ item.link[0] }}
          </n-button>
        </template>
      </n-timeline-item>
    </n-timeline>
  </div>
</template>
