import { Fragment, memo } from 'react'
import clsx from 'clsx'
import SectionTitle from '../generic/SectionTitle'
import PlaygroundCard from './PlaygroundCard'
import reactWeatherImage from '@/assets/playground/react-weather.png'
import vue3TodoListImage from '@/assets/playground/vue3-todolist.png'
import type { PlaygroundConfig } from '@/_types'

const playgroundConfig: PlaygroundConfig[] = [
  {
    id: 'react-weather',
    title: 'React Weather App',
    description:
      'A weather app for checking weather information of major cities in the world, which is based on React, TypeScript, Vite, and MantineUI.',
    image: reactWeatherImage,
    demo: 'https://react-weather-eyvindove.vercel.app/',
    github: 'https://github.com/eyvindove/react-weather',
  },
  {
    id: 'vue3-todolist',
    title: 'Vue3 Todo List',
    description:
      'A Todo List with basic functions which is based on Vue3, Typescript, Vite and TailwindCSS.',
    image: vue3TodoListImage,
    demo: 'https://vue3-todolist-eyvindove.vercel.app/',
    github: 'https://github.com/eyvindove/vue3-todolist',
  },
]

const PlaygroundSection = memo(() => {
  return (
    <>
      <SectionTitle
        title='Playground'
        hashId='playground'
      />

      <div className={clsx('flex flex-row flex-wrap gap-2')}>
        {playgroundConfig.map((item: any, index: number) => (
          <Fragment key={index}>
            <PlaygroundCard playground={item} />
          </Fragment>
        ))}
      </div>
    </>
  )
})

export default PlaygroundSection
