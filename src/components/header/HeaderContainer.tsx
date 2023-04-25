import clsx from 'clsx'
import ColorModeToggler from '@/features/ColorModeToggler'
import HashLinkMenu from '@/features/HashLinkMenu'

export default function HeaderContainer() {
  return (
    <>
      <div>
        {import.meta.env.VITE_FULL_NAME} ({import.meta.env.VITE_AKA})
      </div>

      <div className={clsx('flex items-center gap-2')}>
        <ColorModeToggler />
        <HashLinkMenu />
      </div>
    </>
  )
}
