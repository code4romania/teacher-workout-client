import React from 'react'
import { useMediaQuery } from '@mui/material'
import { Icon } from 'layout/header/icon'
import { Space } from 'layout/header/space'
import { Wrapper } from 'layout/header/bar/wrapper'
import { MobileButtons } from 'layout/header/mobile-buttons'
import { DesktopButtons } from 'layout/header/desktop-buttons'

const useNavbarCollapsed = () => useMediaQuery('(max-width: 975px)')

export const Bar = () => {
  const navbarCollapsed = useNavbarCollapsed()

  return (
    <Wrapper>
      <Icon />
      <Space />
      {navbarCollapsed ? <MobileButtons /> : <DesktopButtons />}
    </Wrapper>
  )
}
