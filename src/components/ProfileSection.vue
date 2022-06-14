<script setup>
import { useOpenLink } from '@/use/openLink'
import { LogoLinkedin, LogoGithub } from '@vicons/carbon'
import AvatarImage from '@/assets/avatar-circle-2018.png'

const socialOptions = [
  {
    id: 'linkedin',
    icon: LogoLinkedin,
    href: 'https://www.linkedin.com/in/chungwei-weng/',
  },
  {
    id: 'github',
    icon: LogoGithub,
    href: 'https://github.com/eyvindove',
  },
]
</script>

<template>
  <div class="section flex flex-col md:flex-row relative">
    <div id="profile" class="flex justify-center items-center p-2">
      <n-avatar
        round
        :size="180"
        :src="AvatarImage"
      />
      <div class="absolute w-[180px] h-[180px] rounded-full border-solid border-2 border-emerald-700/50 translate-x-2 -translate-y-2"></div>
      <div class="absolute w-[180px] h-[180px] rounded-full border-solid border-2 border-cyan-700/50 -translate-x-3 translate-y-1"></div>
      <div class="absolute w-[180px] h-[180px] rounded-full border-solid border-2 border-pink-700/30 translate-x-1 translate-y-3"></div>
    </div>

    <div class="flex flex-col justify-center m-0 md:ml-8 p-2">
      <div class="text-center md:text-left">
        <h1 class="mt-4 text-3xl">Chungwei Weng (Olaf)</h1>
        <h3 class="mt-4 text-xl">Frontend Developer</h3>
      </div>

      <div class="mt-4">
        <div>5 years experience as a software developer. (2+ as Frontend Developer & 3+ as FPGA Engineer) &nbsp;</div>
        <div>
          Have enthusiasm and curiosity in modern technologies. Passionate about web development, fond of aesthetics and user-friendly interface. An insatiable learner, team player and highly disciplined developer with responsibility and a positive working attitude.
        </div>
      </div>

      <div class="flex justify-center mt-4 md:justify-start">
        <n-button
          v-for="item in socialOptions"
          :key="item.id"
          class="mr-2"
          circle
          dashed
          size="large"
          @click="useOpenLink(item.href)"
        >
          <n-icon :component="item.icon" />
        </n-button>
      </div>
    </div>
  </div>
</template>
