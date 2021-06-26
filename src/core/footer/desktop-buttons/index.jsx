import React from 'react'
import { Grid, Hidden } from '@material-ui/core'

import { About } from 'header/desktop-buttons/about'
import { Donate } from 'header/desktop-buttons/donate'
import { PrivacyPolicy } from 'core/footer/desktop-buttons/privacyPolicy'
import { Terms } from 'core/footer/desktop-buttons/terms'

export const DesktopButtons = () => <Hidden smDown>
  <Grid item container justify={'center'} alignItems={'center'}>
    <Terms />
    <PrivacyPolicy />
    <About />
    <Donate />
  </Grid>
</Hidden>
