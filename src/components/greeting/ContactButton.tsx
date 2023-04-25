import { memo } from 'react'
import clsx from 'clsx'
import type { ContactConfig } from '@/_types'

interface ContactButtonProps {
  item: ContactConfig
}

const ContactButton = memo(({ item }: ContactButtonProps) => {
  return (
    <a
      href={item.link}
      target='_blank'
      className={clsx(
        'flex items-center justify-between gap-1',
        'text-base border border-dashed border-zinc-400 p-1 rounded transition-all',
        'hover:border-zinc-500 hover:bg-zinc-300',
        'dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-700'
      )}
    >
      <div className={clsx('flex justify-center items-center w-6 h-6 pb-1')}>
        {item.icon}
      </div>
      <div className='pr-1'>{item.name}</div>
    </a>
  )
})

export default ContactButton
