import { ReactNode, memo } from 'react'
import clsx from 'clsx'

interface HeaderButtonProps {
  children?: ReactNode
}

const HeaderButton = memo(({ children }: HeaderButtonProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        'h-6 w-6 cursor-pointer rounded-md bg-zinc-400 transition-all',
        'hover:bg-zinc-500',
        'dark:bg-zinc-700',
        'dark:hover:bg-zinc-600'
      )}
    >
      {children}
    </div>
  )
})

export default HeaderButton
