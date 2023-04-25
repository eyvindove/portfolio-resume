import { Fragment, memo } from 'react'
import clsx from 'clsx'
import SectionTitle from '../generic/SectionTitle'
import RechartsPieChart from '../generic/RechartsPieChart'
import type { SkillConfigObject, SkillConfig } from '@/_types'

const skillConfig: SkillConfig = {
  frontend: [
    { name: 'React.js', rank: 85 },
    { name: 'Vue.js', rank: 85 },
    { name: 'JavaScript', rank: 85 },
    { name: 'TypeScript', rank: 75 },
    { name: 'Node.js', rank: 65 },
    { name: 'TailwindCSS', rank: 80 },
    { name: 'SCSS', rank: 80 },
    { name: 'Styled-Comp.', rank: 65 },
    { name: 'RWD', rank: 77 },
  ],
  developmentTool: [
    { name: 'Vite', rank: 75 },
    { name: 'Webpack', rank: 70 },
    { name: 'npm', rank: 80 },
    { name: 'pnpm', rank: 80 },
    { name: 'yarn', rank: 80 },
    { name: 'Shell Script', rank: 50 },
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
