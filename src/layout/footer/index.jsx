import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { OrganizerLogo } from 'layout/footer/organizer-logo'
import { NavButtons } from 'layout/footer/nav-buttons'
import { DownloadApp } from 'layout/footer/download-app'
import { Copyright } from 'layout/footer/copyright'

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
