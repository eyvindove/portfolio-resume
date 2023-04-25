import clsx from 'clsx'
import MainPage from '@/pages/MainPage'

const MainLayout = () => {
  return (
    <div
      className={clsx(
        'overflow-x-hidden overflow-y-auto',
        'bg-zinc-100',
        'dark:bg-zinc-800'
      )}
    >
      <div className={clsx('mx-auto w-full p-4', 'lg:w-[90vw]')}>
        <MainPage />
      </div>
    </div>
  )
}

export default MainLayout
