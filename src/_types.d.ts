import { ReactElement } from 'react'

export type ColorMode = 'dark' | 'light'

export interface ColorModeConfig {
  [key: string]: ColorMode
}

export interface ContactConfig {
  name: string
  icon: ReactElement
  link: string
}

export interface SkillConfigObject {
  name: string
  rank: number
  certificate?: string
}

export interface SkillConfig {
  frontend: SkillConfigObject[]
  developmentTool: SkillConfigObject[]
}

export interface LanguageConfig {
  language: SkillConfigObject[]
}

export interface ExperienceConfig {
  role: string[]
  place: string
  duration: string
  description: string
  devStack?: string[]
  image?: string
  link?: string[[string, string]]
}

export interface PlaygroundConfig {
  id: string
  title: string
  description: string
  image?: string
  demo?: string
  github?: string
}
