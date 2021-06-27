import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { OrganizerLogo } from 'core/footer/organizer-logo'
import { NavButtons } from 'core/footer/nav-buttons'
import { DownloadApp } from 'core/footer/download-app/index'
import { Copyright } from 'core/footer/copyright'

export const Footer = () => (
  <Box flexWrap={'wrap'}>
    <Grid container alignItems={'center'} justify={'space-between'}>
      <OrganizerLogo />
      <NavButtons />
      <Copyright />
      <DownloadApp />
    </Grid>
  </Box>
)
