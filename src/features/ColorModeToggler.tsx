import { useContext } from 'react'
import { AppColorModeContext, type AppColorMode } from '@/App'
import { IconContext } from 'react-icons'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import HeaderButton from '@/components/generic/HeaderButton'
import { COLOR_MODE } from '@/utils/config'

const ColorModeToggler = () => {
  const { colorMode, setColorMode } = useContext(
    AppColorModeContext
  ) as AppColorMode

  function toggleMode() {
    const targetMode =
      colorMode === COLOR_MODE.DARK ? COLOR_MODE.LIGHT : COLOR_MODE.DARK

    setColorMode(targetMode)
  }

  return (
    <HeaderButton>
      <div onClick={() => toggleMode()}>
        <IconContext.Provider
          value={{ color: colorMode === COLOR_MODE.DARK ? 'sliver' : 'gold' }}
        >
          {colorMode === COLOR_MODE.DARK && <MdDarkMode />}
          {colorMode === COLOR_MODE.LIGHT && <MdLightMode />}
        </IconContext.Provider>
      </div>
    </HeaderButton>
  )
}

export default ColorModeToggler
