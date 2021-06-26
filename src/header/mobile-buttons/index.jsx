import React from 'react'
import { Menu } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

import { Layout } from 'header/mobile-buttons/layout'
import { useToggleCallbacks } from 'header/mobile-buttons/hooks/use-toggle-callbacks'

export const MobileButtons = () => <Layout>
  <IconButton onClick={useToggleCallbacks()}>
    <Menu />
  </IconButton>
</Layout>
