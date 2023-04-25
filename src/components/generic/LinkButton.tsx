import { ReactNode, memo } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineLink } from 'react-icons/ai'
import clsx from 'clsx'

interface LinkButtonProps {
  text: string
  link: string
  customStyle?: string
  children?: ReactNode
}

const LinkButton = memo(({ text, link, customStyle }: LinkButtonProps) => {
  return (
    <a
      href={link}
      target='_blank'
      className={clsx(
        'flex items-center justify-center gap-1',
        'rounded border border-zinc-400 text-xs cursor-pointer transition-all',
        'hover:border-zinc-500 hover:bg-zinc-400',
        'dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-700',
        customStyle
      )}
    >
      <IconContext.Provider value={{ color: '' }}>
        <AiOutlineLink />
      </IconContext.Provider>

      {text}
    </a>
  )
})

export default LinkButton
