import { Fragment, memo } from 'react'
import clsx from 'clsx'
import SectionTitle from '../generic/SectionTitle'
import RechartsPieChart from '../generic/RechartsPieChart'
import type { SkillConfigObject } from '@/_types'

const languageConfig: SkillConfigObject[] = [
  { name: 'English', rank: 77, certificate: 'TOEIC 740' },
  { name: 'Japanese', rank: 56, certificate: 'JLPT N3' },
  { name: 'Mandarin', rank: 90, certificate: 'Native' },
  { name: 'Taiwanese', rank: 90, certificate: 'Native' },
]

const LanguageSection = memo(() => {
  return (
    <>
      <SectionTitle
        title='Language'
        hashId='language'
      />

      <div
        className={clsx(
          'flex flex-wrap justify-around gap-2',
          'w-full mx-auto',
          'lg:w-[90%] lg:justify-start'
        )}
      >
        {languageConfig.map((item: SkillConfigObject) => (
          <Fragment key={item.name}>
            <RechartsPieChart item={item} />
          </Fragment>
        ))}
      </div>
    </>
  )
})

export default LanguageSection
