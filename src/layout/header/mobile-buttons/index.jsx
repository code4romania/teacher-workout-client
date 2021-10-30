import React from 'react'
import { Menu } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { Layout } from 'layout/header/mobile-buttons/layout'
import { useToggleCallbacks } from 'layout/header/mobile-buttons/hooks/use-toggle-callbacks'

export const MobileButtons = () => <Layout>
  <IconButton onClick={useToggleCallbacks()}>
    <Menu />
  </IconButton>
</Layout>
