import { Fragment, memo } from 'react'
import clsx from 'clsx'
import ContactButton from './ContactButton'
import SectionTitle from '../generic/SectionTitle'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MdOutlineWavingHand } from 'react-icons/md'
import type { ContactConfig } from '@/_types'

const contactConfig: ContactConfig[] = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/chungwei-weng/',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/eyvindove',
  },
]

const fullName = import.meta.env.VITE_FULL_NAME
const aka = import.meta.env.VITE_AKA

const GreetingSection = memo(() => {
  return (
    <div
      className={clsx(
        'font-kalam',
        'greeting-text',
        'flex flex-col gap-3',
        'px-2 py-4',
        'md:p-8 md:gap-4',
        'lg:p-10 lg:gap-5'
      )}
    >
      <SectionTitle
        title=''
        hashId='home'
      />

      <div className={clsx('flex items-center gap-4')}>
        Hi!
        <div className={clsx('animate-hand-wave')}>
          <MdOutlineWavingHand />
        </div>
      </div>

      <div
        className={clsx(
          'flex flex-wrap flex-col gap-2',
          'md:gap-3',
          'lg:gap-4 lg:flex-row'
        )}
      >
        <div
          className={clsx('flex items-baseline gap-2', 'md:gap-3', 'lg:gap-4')}
        >
          <div>I'm</div>
          <div className={clsx('greeting-highlight-text')}>{fullName}</div>
        </div>
        <div
          className={clsx('flex items-baseline gap-2', 'md:gap-3', 'lg:gap-4')}
        >
          <div>aka</div>
          <div className={clsx('greeting-highlight-text')}>{aka}</div>
        </div>
      </div>

      <div
        className={clsx(
          'flex items-baseline gap-2',
          'w-[22ch] border-r-[3px] border-r-teal-300 whitespace-nowrap overflow-hidden tracking-wide',
          'md:gap-3',
          'lg:gap-4',
          'animate-typing-with-blink-caret'
        )}
      >
        <div>A</div>
        <div className={clsx('greeting-highlight-text')}>
          Frontend Developer
        </div>
      </div>

      <div className={clsx('flex flex-col gap-2', 'text-lg', 'lg:text-xl')}>
        <div>
          Seasoned software developer with 3+ years of experience as frontend
          developer.
        </div>
        <div>
          Have enthusiasm and curiosity in modern technologies. Passionate about
          web development, fond of aesthetic and user-friendly interface. An
          insatiable learner, team player and highly disciplined developer with
          responsibility and positive working attitude.
        </div>
      </div>

      <div className={clsx('flex gap-4')}>
        {contactConfig.map((item: ContactConfig) => (
          <Fragment key={item.name}>
            <ContactButton item={item} />
          </Fragment>
        ))}
      </div>
    </div>
  )
})

export default GreetingSection
