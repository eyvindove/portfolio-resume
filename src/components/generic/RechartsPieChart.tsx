import { useContext, useMemo, memo } from 'react'
import { AppColorModeContext, type AppColorMode } from '@/App'
import clsx from 'clsx'
import { ResponsiveContainer, PieChart, Pie } from 'recharts'
import { COLOR_MODE, rankCategoryConfig } from '@/utils/config'
import type { SkillConfigObject } from '@/_types'

interface RechartsPieChartProps {
  item: SkillConfigObject
}

const RechartsPieChart = memo(({ item }: RechartsPieChartProps) => {
  const { colorMode } = useContext(AppColorModeContext) as AppColorMode

  const calculateEndAngle = useMemo(
    () => (rank: number) => {
      return Math.round((rank / 100) * 360 + 90)
    },
    []
  )

  const getRankConfig = useMemo(
    () => (rank: number) => {
      const target = rankCategoryConfig.find(
        (item: any) => item.range[0] <= rank && item.range[1] >= rank
      )

      return target
    },
    []
  )

  return (
    <div
      className={clsx(
        'relative',
        'w-[130px] h-[130px] transition-all',
        'lg:w-[150px] lg:h-[150px]',
        'hover:scale-110'
      )}
    >
      <ResponsiveContainer
        width='100%'
        height='100%'
      >
        <PieChart>
          {/* -- base layer-- */}
          <Pie
            data={[item]}
            dataKey='rank'
            nameKey='name'
            cx='50%'
            cy='50%'
            innerRadius='85%'
            outerRadius='97%'
            stroke='none'
            // -- fill: (dark: zinc.700, light: zinc.300)
            fill={colorMode === COLOR_MODE.DARK ? '#3f3f46' : '#d4d4d8'}
            startAngle={90}
            endAngle={450}
          />
          {/* -- ranking layer -- */}
          <Pie
            data={[item]}
            dataKey='rank'
            nameKey='name'
            cx='50%'
            cy='50%'
            innerRadius='85%'
            outerRadius='100%'
            stroke='none'
            fill={getRankConfig(item.rank)?.color ?? ''}
            startAngle={90}
            endAngle={calculateEndAngle(item.rank)}
          />
        </PieChart>
      </ResponsiveContainer>
      <div
        className={clsx(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'flex flex-col justify-center items-center gap-1',
          'text-sm',
          'lg:text-base'
        )}
      >
        <div className={clsx('whitespace-nowrap')}>{item.name}</div>

        {item.certificate && (
          <div
            className={clsx('whitespace-nowrap text-xs italic text-zinc-300')}
          >
            {item.certificate}
          </div>
        )}

        <div className={clsx('text-xs italic text-zinc-500', 'lg:text-sm')}>
          {getRankConfig(item.rank)?.name ?? ''}
        </div>
      </div>
    </div>
  )
})

export default RechartsPieChart
