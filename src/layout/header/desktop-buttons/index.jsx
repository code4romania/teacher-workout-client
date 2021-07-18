import React from 'react'
import { Box, Grid, Hidden } from '@material-ui/core'

import { About } from 'layout/header/desktop-buttons/about'
import { Donate } from 'layout/header/desktop-buttons/donate'
import { Contact } from 'layout/header/desktop-buttons/contact'
import { Lessons } from 'layout/header/desktop-buttons/lessons'

export const DesktopButtons = () => <Hidden smDown>
  <Grid item>
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <About />
      <Lessons />
      <Contact />
      <Donate />
    </Box>
  </Grid>
</Hidden>
