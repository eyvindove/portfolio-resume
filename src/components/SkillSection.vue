<script setup>
const frontendSkill = [
  { label: 'JavaScript', percentage: 85 },
  { label: 'TypeScript', percentage: 45 },
  { label: 'Vue.js', percentage: 85 },
  { label: 'React.js', percentage: 60 },
  { label: 'Node.js', percentage: 35 },
  { label: 'Tailwind', percentage: 75 },
  { label: 'SCSS', percentage: 85 },
]

const developmentToolSkill = [
  { label: 'yarn', percentage: 80 },
  { label: 'npm', percentage: 80 },
  { label: 'Vite', percentage: 70 },
  { label: 'Webpack', percentage: 60 },
  { label: 'Shell', percentage: 50 },

]

const languageSkill = [
  { label: 'English', percentage: 75 },
  { label: 'Japanese', percentage: 60 },
  { label: 'Mandarin', percentage: 90 },
  { label: 'Taiwanese', percentage: 90 },

]

const skillList = [
  ...frontendSkill,
  ...developmentToolSkill,
]

const convertStatus = (percentage) => {
  return percentage >= 75 ? 'success' : percentage >= 50 ? 'warning' : percentage >= 25 ? 'info' : 'default'
}

const convertLevel = (percentage) => {
  return percentage >= 75 ? 'Advanced' : percentage >= 50 ? 'Intermediate' : percentage >= 25 ? 'Elementary' : 'Basic'
}
</script>

<template>
  <div class="section">
    <n-h3 id="skill">Skill</n-h3>

    <n-space justify="center">
      <n-progress
        v-for="item in skillList"
        :key="item.label"
        class="mt-2 mr-2"
        type="circle"
        processing
        :percentage="item.percentage"
        :status="convertStatus(item.percentage)"
      >
        <div class="flex flex-col items-center">
          <div>{{ item.label }}</div>
          <div class="text-slate-700">{{ convertLevel(item.percentage) }}</div>
        </div>
      </n-progress>
    </n-space>

    <n-h3 id="language">Language</n-h3>

    <n-space justify="center">
      <n-progress
        v-for="item in languageSkill"
        :key="item.label"
        class="mt-2 mr-2"
        type="circle"
        processing
        :percentage="item.percentage"
        :status="convertStatus(item.percentage)"
      >
        <div class="flex flex-col items-center">
          <div>{{ item.label }}</div>
          <div class="text-slate-700">{{ convertLevel(item.percentage) }}</div>
        </div>
      </n-progress>
    </n-space>
  </div>
</template>
