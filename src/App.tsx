import { createContext, useState } from 'react'
import clsx from 'clsx'
import HeaderLayout from '@/layouts/HeaderLayout'
import MainLayout from '@/layouts/MainLayout'
import { COLOR_MODE } from '@/utils/config'
import type { ColorMode } from '@/_types'

export interface AppColorMode {
  colorMode: ColorMode
  setColorMode: (mode: ColorMode) => void
}

export const AppColorModeContext = createContext<AppColorMode | null>(null)

const App = () => {
  const [colorMode, setColorMode] = useState<ColorMode>(COLOR_MODE.DARK)

  return (
    <AppColorModeContext.Provider value={{ colorMode, setColorMode }}>
      <div className={clsx({ dark: colorMode === COLOR_MODE.DARK })}>
        <div
          className={clsx(
            'grid grid-cols-[auto] grid-rows-[40px_auto]',
            'min-h-[100vh] text-zinc-950',
            'dark:text-slate-200'
          )}
        >
          <HeaderLayout />
          <MainLayout />
        </div>
      </div>
    </AppColorModeContext.Provider>
  )
}

export default App
