import React from 'react'
import { Grid, Hidden } from '@material-ui/core'

import { About } from 'layout/header/desktop-buttons/about'
import { Donate } from 'layout/header/desktop-buttons/donate'
import { Contact } from 'layout/header/desktop-buttons/contact'
import { Lessons } from 'layout/header/desktop-buttons/lessons'

export const DesktopButtons = () => <Hidden smDown>
  <Grid item container justify={'center'} alignItems={'center'}>
    <About />
    <Lessons />
    <Contact />
    <Donate />
  </Grid>
</Hidden>
