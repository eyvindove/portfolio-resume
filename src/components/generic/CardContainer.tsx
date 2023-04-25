import { ReactNode, memo } from 'react'
import clsx from 'clsx'

interface CardContainerProps {
  children?: ReactNode
}

const CardContainer = memo(({ children }: CardContainerProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-1',
        'mx-auto w-full h-full text-sm rounded-lg bg-zinc-300 p-4',
        'shadow-lg shadow-zinc-900/50 transition-all',
        'dark:bg-zinc-900/50 dark:shadow-cyan-900/50',
        'lg:flex-row lg:gap-4 lg:w-[90%]'
      )}
    >
      {children}
    </div>
  )
})

export default CardContainer
