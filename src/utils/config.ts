import type { ColorModeConfig } from '@/_types'

export const COLOR_MODE: ColorModeConfig = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const SKILL_CATEGORY = {
  ADVANCED: 'Advanced',
  INTERMEDIATE: 'Intermediate',
  ELEMENTARY: 'Elementary',
  BASIC: 'Basic',
}

export const rankCategoryConfig = [
  {
    name: SKILL_CATEGORY.ADVANCED,
    range: [76, 100],
    color: '#14b8a6', // -- teal.500
  },
  {
    name: SKILL_CATEGORY.INTERMEDIATE,
    range: [51, 75],
    color: '#0f766e', // -- teal.700
  },
  {
    name: SKILL_CATEGORY.ELEMENTARY,
    range: [26, 50],
    color: '#134e4a', // -- teal.900
  },
  {
    name: SKILL_CATEGORY.BASIC,
    range: [0, 25],
    color: '#042f2e', // -- teal.950
  },
]
