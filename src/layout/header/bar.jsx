import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import { Icon } from 'layout/header/icon'
import { Space } from 'layout/header/space'
import { MobileButtons } from 'layout/header/mobile-buttons'
import { DesktopButtons } from 'layout/header/desktop-buttons'

const useStyles = makeStyles({
  root: {
    height: 80,
    borderBottom: '1px solid #E5E7EB',
    background: 'white',
  },
})

const properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const Bar = () => (
  <Box {...properties} className={useStyles().root}>
    <Icon />
    <Space />
    <MobileButtons />
    <DesktopButtons />
  </Box>
)
