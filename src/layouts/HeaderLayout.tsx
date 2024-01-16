import clsx from 'clsx'
import HeaderContainer from '@/components/header/HeaderContainer'

const HeaderLayout = () => {
  return (
    <div
      className={clsx(
        'sticky top-0 z-10',
        'flex items-center justify-between shadow-md shadow-slate-900/50',
        'bg-zinc-200 px-4 transition-all',
        'dark:bg-zinc-900 dark:shadow-cyan-900/50'
      )}
    >
      <HeaderContainer />
    </div>
  )
}

export default HeaderLayout
