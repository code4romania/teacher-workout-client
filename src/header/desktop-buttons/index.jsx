import React from 'react'
import { Box, Grid, Hidden } from '@material-ui/core'

import { About } from 'header/desktop-buttons/about'
import { Donate } from 'header/desktop-buttons/donate'
import { Contact } from 'header/desktop-buttons/contact'
import { Lessons } from 'header/desktop-buttons/lessons'

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
