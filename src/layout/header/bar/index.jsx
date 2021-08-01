import React from 'react'
import { Icon } from 'layout/header/icon'
import { Space } from 'layout/header/space'
import { Wrapper } from 'layout/header/bar/wrapper'
import { MobileButtons } from 'layout/header/mobile-buttons'
import { DesktopButtons } from 'layout/header/desktop-buttons'

export const Bar = () => <Wrapper>
  <Icon />
  <Space />
  <MobileButtons />
  <DesktopButtons />
</Wrapper>
