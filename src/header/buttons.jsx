import React from 'react'

import { DesktopButtons } from 'header/desktop-buttons'
import { MobileButtons } from 'header/mobile-buttons'
import { Grid } from '@material-ui/core'

export const Buttons = () => <Grid item>
  <DesktopButtons />
  <MobileButtons />
</Grid>
