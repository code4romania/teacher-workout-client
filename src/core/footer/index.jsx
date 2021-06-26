import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

import { OrganizerLogo } from 'core/footer/organizer-logo'
import { DownloadApp } from 'core/footer/download-app'
import { DesktopButtons } from 'core/footer/desktop-buttons'

export const Footer = () => (
  <Box>
    <Box mb={4}>
    <Grid container alignItems={"center"} justify={"space-between"}>
        <OrganizerLogo />
        <DownloadApp />
    </Grid>
    </Box>
    <Box mb={4}>
      <Grid container alignItems={"center"} justify={"space-between"}>
          <Grid item>
            <Typography>© 2021 Code for Romania. Toate drepturile rezervate.</Typography>
          </Grid>
          <Grid item>
            <DesktopButtons />
          </Grid>
      </Grid>
    </Box>
  </Box>
)
