import { ReactNode, memo } from 'react'
import clsx from 'clsx'
import CardContainer from '../generic/CardContainer'
import LinkButton from '../generic/LinkButton'
import type { PlaygroundConfig } from '@/_types'

interface PlaygroundCardProps {
  playground: PlaygroundConfig
  children?: ReactNode
}

const PlaygroundCard = memo(({ playground, children }: PlaygroundCardProps) => {
  return (
    <div
      data-aos='flip-up'
      className={clsx('basis-full', 'md:basis-[calc(50%-8px)]', 'lg:basis-1/3')}
    >
      <CardContainer>
        <div className={clsx('flex flex-col justify-between gap-2')}>
          <div className={clsx('flex flex-col gap-4')}>
            <img
              src={playground.image}
              alt='Playground Image'
              className={clsx('w-full h-[320px] object-contain')}
            />

            <div className={clsx('text-lg')}>{playground.title}</div>
            <div>{playground.description}</div>

            {children}
          </div>

          <div className={clsx('mt-4 flex items-center gap-2')}>
            <LinkButton
              text='Live Demo'
              link={playground.demo ?? ''}
              customStyle='p-2 font-bold'
            />

            <LinkButton
              text='Github'
              link={playground.github ?? ''}
              customStyle='p-2'
            />
          </div>
        </div>
      </CardContainer>
    </div>
  )
})

export default PlaygroundCard
