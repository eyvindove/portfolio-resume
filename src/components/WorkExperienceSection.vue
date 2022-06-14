<script setup>
import { CheckmarkOutline } from '@vicons/carbon'
const options = [
  {
    title: 'Frontend Web Developer',
    name: 'Oh!Bot Sien Technology Inc.',
    content: 'Develop and improve social CRM SaaS services with Vue.js, responsible for admin dashboard, member management, reservation products, customized project and official website.',
    time: 'Dec. 2021 ~ Jun. 2022',
    stack: ['Vue3', 'Vue2', 'Vite', 'JavaScript', 'TailwindCSS', 'GitLab CI', 'Jira'],
  },
  {
    title: 'Senior Frontend Developer',
    name: 'Miracle Information Technology Inc.',
    content: 'Develop and improve member management and admin dashboard services with Vue.js.',
    time: 'Jul. 2019 ~ Dec. 2020',
    stack: ['Vue2', 'JavaScript', 'Webpack', 'SCSS', 'Pug', 'Scrum'],
  },
  {
    title: 'Senior FPGA Engineer <<< FPGA Engineer',
    name: 'ADLINK Technology Inc.',
    content: 'Design, implement and verify FPGA centric solutions for modular instrument products, responsible for frame grabber, data acquisition and digitizer products.',
    time: 'Jul. 2015 ~ Oct. 2018',
    stack: ['Verilog HDL', 'FPGA', 'ModelSim', 'Algorithm Development', 'Shell', 'Jira'],
  },
]
</script>

<template>
  <div class="section">
    <n-h3 id="work-experience">Work Experience</n-h3>

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

          <n-tag
            v-for="subItem in item.stack"
            :key="subItem"
            class="mt-2 mr-2"
            round
            size="small"
            type="success"
            :bordered="false"
          >
            {{ subItem }}
            <template #icon>
              <n-icon :component="CheckmarkOutline" />
            </template>
          </n-tag>
        </template>
      </n-timeline-item>
    </n-timeline>
  </div>
</template>
