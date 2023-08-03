import { Fragment, memo } from 'react'
import clsx from 'clsx'
import SectionTitle from '../generic/SectionTitle'
import RechartsPieChart from '../generic/RechartsPieChart'
import type { SkillConfigObject, SkillConfig } from '@/_types'

const skillConfig: SkillConfig = {
  frontend: [
    { name: 'React.js', rank: 90 },
    { name: 'Next.js', rank: 65 },
    { name: 'Vue.js', rank: 90 },
    { name: 'JavaScript', rank: 90 },
    { name: 'TypeScript', rank: 82 },
    { name: 'Node.js', rank: 65 },
    { name: 'TailwindCSS', rank: 80 },
    { name: 'SCSS', rank: 80 },
    { name: 'CSS Modules', rank: 80 },
    { name: 'RWD', rank: 77 },
    { name: 'Jest', rank: 60 },
    { name: 'React Testing Library', rank: 60 },
  ],
  developmentTool: [
    { name: 'Vite', rank: 83 },
    { name: 'Webpack', rank: 70 },
    { name: 'npm', rank: 80 },
    { name: 'pnpm', rank: 80 },
    { name: 'yarn', rank: 80 },
    { name: 'Docker', rank: 40 },
    { name: 'Shell Script', rank: 60 },
  ],
}

const skillList = [...skillConfig.frontend, ...skillConfig.developmentTool]

const SkillSection = memo(() => {
  return (
    <>
      <SectionTitle
        title='Skill'
        hashId='skill'
      />

      <div
        className={clsx(
          'flex flex-wrap justify-around gap-2',
          'w-full mx-auto',
          'lg:w-[90%] lg:justify-start'
        )}
      >
        {skillList.map((item: SkillConfigObject) => (
          <Fragment key={item.name}>
            <RechartsPieChart item={item} />
          </Fragment>
        ))}
      </div>
    </>
  )
})

export default SkillSection
