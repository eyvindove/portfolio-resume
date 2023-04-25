import { Fragment, memo } from 'react'
import clsx from 'clsx'
import SectionTitle from '../generic/SectionTitle'
import ExperienceCard from '../generic/ExperienceCard'
import uecLogo from '@/assets/logo/uec-logo.jpeg'
import tkuLogo from '@/assets/logo/tku-logo.jpeg'
import type { ExperienceConfig } from '@/_types'

const educationConfig: ExperienceConfig[] = [
  {
    role: ['Master of Engineering, Electrical and Computer Engineering'],
    place: 'Tamkang University (TKU), New Taipei',
    description:
      'Thesis - Hardware/Software Co-Design of Pick and Place Operations for Path Planning',
    duration: 'Feb. 2011 ~ Jan. 2014',
    devStack: [
      'Path Planning Optimization',
      'Ant Colony Optimization (ACO) algorithm',
      'Motion Control Design',
    ],
    image: tkuLogo,
  },
  {
    role: ['Short-term Exchange Study Program - JUSST'],
    place: 'The University of Electro-Communications (UEC), Tokyo',
    description:
      'Japanese University Studies in Science & Technology (JUSST) Program',
    duration: 'Apr. 2012 ~ Mar. 2013',
    link: [
      ['JUSST Program', 'http://www.fedu.uec.ac.jp/en/future_students/jusst/'],
    ],
    image: uecLogo,
  },
  {
    role: ['Bachelor of Engineering, Electrical and Computer Engineering'],
    place: 'Tamkang University (TKU), New Taipei',
    description: '',
    duration: 'Sep. 2006 ~ Jan. 2011',
    image: tkuLogo,
  },
]

const EducationSection = memo(() => {
  return (
    <>
      <SectionTitle
        title='Education'
        hashId='education'
      />

      <div className={clsx('flex flex-col gap-4')}>
        {educationConfig.map((item: any, index: number) => (
          <Fragment key={index}>
            <ExperienceCard experience={item} />
          </Fragment>
        ))}
      </div>
    </>
  )
})

export default EducationSection
