import { memo } from 'react'
import clsx from 'clsx'

interface SectionTitleProps {
  title: string
  hashId?: string
}

const SectionTitle = memo(({ title, hashId }: SectionTitleProps) => {
  return (
    <h3
      id={hashId}
      className={clsx(
        'pb-4 pt-8 text-center text-xl underline',
        'lg:text-left'
      )}
    >
      {title}
    </h3>
  )
})

export default SectionTitle
