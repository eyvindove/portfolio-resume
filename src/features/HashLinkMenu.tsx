import { useState, memo, Fragment } from 'react'
import { IconContext } from 'react-icons'
import { MdMenu, MdMenuOpen } from 'react-icons/md'
import HeaderButton from '@/components/generic/HeaderButton'
import clsx from 'clsx'

interface HashLinkConfig {
  id: string
  label: string
}

const hashLinkConfig: HashLinkConfig[] = [
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'skill',
    label: 'Skill',
  },
  {
    id: 'language',
    label: 'Language',
  },
  {
    id: 'work-experience',
    label: 'Work Experience',
  },
  {
    id: 'education',
    label: 'Education',
  },
  {
    id: 'playground',
    label: 'Playground',
  },
]

const HashLinkMenu = memo(() => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <HeaderButton>
        <div onClick={() => setOpen(!open)}>
          <IconContext.Provider value={{}}>
            {open ? <MdMenuOpen /> : <MdMenu />}
          </IconContext.Provider>
        </div>
      </HeaderButton>

      {open && (
        <div
          className={clsx(
            'animate-slide-left-in',
            'fixed top-[40px] right-0 bottom-0 transition-all z-10',
            'bg-zinc-700/90 w-full'
          )}
        >
          {hashLinkConfig.map((item: any) => (
            <Fragment key={item.id}>
              <a
                className={clsx(
                  'block text-zinc-300 text-center p-4 cursor-pointer transition-all',
                  'hover:underline hover:text-teal-500'
                )}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </Fragment>
          ))}
        </div>
      )}
    </>
  )
})

export default HashLinkMenu
