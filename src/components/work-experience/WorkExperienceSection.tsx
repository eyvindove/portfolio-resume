import { Fragment, memo } from 'react'
import clsx from 'clsx'
import SectionTitle from '../generic/SectionTitle'
import ExperienceCard from '../generic/ExperienceCard'
import efaiLogo from '@/assets/logo/everfortuneai-logo.jpeg'
import ohbotLogo from '@/assets/logo/ohbot-logo.jpeg'
import miracleLogo from '@/assets/logo/miracle-logo.jpeg'
import adlinkLogo from '@/assets/logo/adlink-logo.jpeg'
import type { ExperienceConfig } from '@/_types'

const workExperienceConfig: ExperienceConfig[] = [
  {
    role: ['Software Developer'],
    place: 'Ever Fortune.AI',
    duration: 'Aug. 2022 ~ now',
    description:
      'Build and develop next generation genetic testing analysis web applications with React.js ecosystem, responsible for admin CMS and client-side website. Refactor released genetic testing analysis web application from Vue.js to React.js. Maintain partial analysis report PDF generator with Python.',
    devStack: [
      'React',
      'Vue',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'GitLab CICD',
      'Python',
    ],
    image: efaiLogo,
  },
  {
    role: ['Frontend Web Developer'],
    place: 'Oh!Bot Sien Technology',
    description:
      'Developed and improved social CRM SaaS applications with Vue.js ecosystem, responsible for admin CMS, reservation product, customized project and official website.',
    duration: 'Dec. 2021 ~ Jun. 2022',
    devStack: [
      'Vue3',
      'Vue2',
      'JavaScript',
      'Vite',
      'TailwindCSS',
      'GitLab CI',
      'Jira',
    ],
    image: ohbotLogo,
  },
  {
    role: ['Senior Frontend Developer', 'Frontend Developer'],
    place: 'Miracle Information Technology',
    description:
      'Developed and improved client-side website and admin dashboard applications with Vue.js ecosystem.',
    duration: 'Jul. 2019 ~ Dec. 2020',
    devStack: [
      'Vue2',
      'JavaScript',
      'Webpack',
      'SCSS',
      'Pug',
      'GitLab CI',
      'Scrum',
    ],
    image: miracleLogo,
  },
  {
    role: ['Senior FPGA Engineer', 'FPGA Engineer'],
    place: 'ADLINK Technology',
    description:
      'Designed, implemented and verified FPGA centric solutions for modular instrument products, responsible for frame grabber, data acquisition and digitizer products.',
    duration: 'Jul. 2015 ~ Oct. 2018',
    devStack: [
      'Verilog HDL',
      'FPGA',
      'ModelSim',
      'Algorithm Development',
      'Shell Script',
      'Jira',
    ],
    image: adlinkLogo,
  },
]

const WorkExperienceSection = memo(() => {
  return (
    <>
      <SectionTitle
        title='Work Experience'
        hashId='work-experience'
      />

      <div className={clsx('flex flex-col gap-4')}>
        {workExperienceConfig.map((item: any, index: number) => (
          <Fragment key={index}>
            <ExperienceCard experience={item} />
          </Fragment>
        ))}
      </div>
    </>
  )
})

export default WorkExperienceSection
