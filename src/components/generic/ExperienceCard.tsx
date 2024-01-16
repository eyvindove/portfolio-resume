import { Fragment, ReactNode, memo } from 'react'
import { IconContext } from 'react-icons'
import { MdOutlineArrowLeft } from 'react-icons/md'
import { BsCheck2Circle } from 'react-icons/bs'
import { AiOutlineCompass } from 'react-icons/ai'
import clsx from 'clsx'
import CardContainer from './CardContainer'
import LinkButton from './LinkButton'
import type { ExperienceConfig } from '@/_types'

interface ExperienceCardProps {
  experience: ExperienceConfig
  children?: ReactNode
}

const ExperienceCard = memo(({ experience, children }: ExperienceCardProps) => {
  return (
    <div data-aos='flip-up'>
      <CardContainer>
        <>
          <div
            className={clsx(
              'flex shrink-0 items-center justify-center',
              'h-10 w-10 overflow-hidden rounded-full bg-zinc-300',
              'dark:bg-zinc-700'
            )}
          >
            {experience.image ? (
              <img
                src={experience.image}
                className={clsx('h-full w-full object-cover')}
              />
            ) : (
              <AiOutlineCompass />
            )}
          </div>

          <div className={clsx('text-sm')}>
            <div
              className={clsx('flex flex-col flex-wrap', 'py-1', 'lg:flex-row')}
            >
              {experience.role.map((role: string, index: number) => (
                <div
                  key={index}
                  className={clsx('flex items-center text-lg', 'lg:text-xl', {
                    'text-slate-400': index > 0,
                  })}
                >
                  {index > 0 ? <MdOutlineArrowLeft /> : null}
                  {role}
                </div>
              ))}
            </div>
            <div className={clsx('italic')}>{experience.place}</div>
            <div
              className={clsx('italic text-slate-500', 'dark:text-slate-500')}
            >
              {experience.duration}
            </div>
            {experience.description && (
              <div className={clsx('py-4 whitespace-pre-line')}>
                {experience.description}
              </div>
            )}

            {children}

            <div className={clsx('flex flex-wrap gap-2')}>
              {experience.devStack?.map((item: string, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    'flex items-center justify-center gap-1',
                    'h-5 rounded-[12px] bg-teal-500 px-2 text-xs',
                    'dark:bg-teal-700'
                  )}
                >
                  <IconContext.Provider value={{ color: '' }}>
                    <BsCheck2Circle />
                  </IconContext.Provider>

                  <div className='shrink-0'>{item}</div>
                </div>
              ))}
            </div>

            <div className={clsx('flex flex-wrap gap-2')}>
              {experience.link?.map((item: string, index: number) => (
                <Fragment key={index}>
                  <LinkButton
                    text={item[0]}
                    link={item[1]}
                    customStyle='p-1'
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </>
      </CardContainer>
    </div>
  )
})

export default ExperienceCard
