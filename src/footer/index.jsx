import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { OrganizerLogo } from 'footer/organizer-logo'
import { NavButtons } from 'footer/nav-buttons'
import { DownloadApp } from 'footer/download-app/index'
import { Copyright } from 'footer/copyright'

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
