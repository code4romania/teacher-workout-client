import React from 'react'
import { Grid } from '@material-ui/core'

import { OrganizerLogo } from 'core/footer/organizer-logo'
import { DownloadApp } from 'core/footer/download-app'

export const Footer = () => (
  <Grid container alignItems={"center"} justify={"space-between"}>
    <OrganizerLogo />
    <DownloadApp />
  </Grid>
)
