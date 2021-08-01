import React from 'react'
import { Grid, Hidden } from '@material-ui/core'

import { Contact } from 'layout/header/desktop-buttons/contact'
import { Lessons } from 'layout/header/desktop-buttons/lessons'
import { About } from 'layout/common/about'
import { Donate } from 'layout/common/donate'

export const DesktopButtons = () => <Hidden smDown>
  <Grid item container justify={'center'} alignItems={'center'}>
    <About />
    <Lessons />
    <Contact />
    <Donate />
  </Grid>
</Hidden>
