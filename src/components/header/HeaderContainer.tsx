import clsx from 'clsx'
import ColorModeToggler from '@/features/ColorModeToggler'
import HashLinkMenu from '@/features/HashLinkMenu'

export default function HeaderContainer() {
  return (
    <>
      <div className={clsx('font-bold text-zinc-800', 'dark:text-zinc-100')}>
        {import.meta.env.VITE_FULL_NAME}
      </div>

      <div className={clsx('flex items-center gap-2')}>
        <ColorModeToggler />
        <HashLinkMenu />
      </div>
    </>
  )
}
