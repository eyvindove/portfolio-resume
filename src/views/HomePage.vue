<script setup>
import ThemeSelector from '@/components/ThemeSelector.vue'
import ProfileSection from '@/components/ProfileSection.vue'
import SkillSection from '@/components/SkillSection.vue'
import WorkExperienceSection from '@/components/WorkExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import PlaygroundSection from '@/components/PlaygroundSection.vue'

const emit = defineEmits(['toggleTheme'])

</script>

<template>
  <n-layout class="p-4">
    <div class="flex justify-end">
      <ThemeSelector @toggle-theme="(value) => emit('toggleTheme', value)" />
    </div>

    <ProfileSection />
    <SkillSection />
    <WorkExperienceSection />
    <EducationSection />
    <PlaygroundSection />
  </n-layout>
</template>
