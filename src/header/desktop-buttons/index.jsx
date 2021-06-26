import React from 'react'
import { Grid, Hidden } from '@material-ui/core'

import { About } from 'header/desktop-buttons/about'
import { Donate } from 'header/desktop-buttons/donate'
import { Contact } from 'header/desktop-buttons/contact'
import { Lessons } from 'header/desktop-buttons/lessons'

export const DesktopButtons = () => <Hidden smDown>
  <Grid item container justify={'center'} alignItems={'center'}>
    <About />
    <Lessons />
    <Contact />
    <Donate />
  </Grid>
</Hidden>
