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
    place: 'Ever Fortune.AI, Taichung',
    duration: 'Aug. 2022 ~ Present',
    description: `* Genetic testing analysis applications
      - Construct enterprise-side admin CMS and client-side website start from scratch with React.js.
      - Refactor released client-side website from Vue.js to Next.js.
      - Maintain partial analysis report PDF generator service with Python.`,
    devStack: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Vite',
      'Tanstack Query',
      'Ant Design UI',
      'TailwindCSS',
      'GitLab CICD',
      'Python',
    ],
    image: efaiLogo,
  },
  {
    role: ['Frontend Web Developer'],
    place: 'Oh!Bot Sien Technology, Taichung',
    description: `* Social CRM SaaS applications
      - Improved B2B admin CMS platform.
      - Improved B2C reservation and member management services.
      - Maintained official website.`,
    duration: 'Dec. 2021 ~ Jun. 2022',
    devStack: [
      'Vue3',
      'Vue2',
      'Vite',
      'TailwindCSS',
      'Naive UI',
      'GitLab CI',
      'Jira',
    ],
    image: ohbotLogo,
  },
  {
    role: ['Sr. Frontend Developer', 'Frontend Developer'],
    place: 'Miracle Information Technology, Taichung',
    description: `* Member management applications
      - Developed and improved admin dashboard and client-side website with Vue.js.

      * A frontend project lead
      - Lead 2 frontend members.
      - Coordinated developing schedule, reviewed code and assisted in deploying application services.`,
    duration: 'Jul. 2019 ~ Dec. 2020',
    devStack: ['Vue2', 'Webpack', 'SCSS', 'GitLab CI', 'Scrum'],
    image: miracleLogo,
  },
  {
    role: ['Sr. FPGA Engineer', 'FPGA Engineer'],
    place: 'ADLINK Technology, New Taipei',
    description: `* Modular instrument products - frame grabber | data acquisition | digitizer
      - Designed, implemented and verified FPGA centric solutions for modular instrument products.
      - RTL coding and simulation, FPGA implementation, verification and maintenance.
      - Designed custom interfaces, includes PCIe, DDR, IIC, SMBus and SPI.
      - Provided technical risks with mitigation and contingency strategies.
      - Introduced Git workflow into the team.`,
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
