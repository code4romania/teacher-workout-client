import React from 'react'
import { Box, Container } from '@material-ui/core'

import { OrganizerLogo } from 'layout/footer/organizer-logo'
import { NavButtons } from 'layout/footer/nav-buttons'
import { DownloadApp } from 'layout/footer/download-app'
import { Copyright } from 'layout/footer/copyright'

export const Footer = () => (
  <Container>
    <Box display={'flex'} pt={10} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}>
      <OrganizerLogo />
      <NavButtons />
      <Copyright />
      <DownloadApp />
    </Box>
  </Container>
)
