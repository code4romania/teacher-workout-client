import React from 'react'
import { Box, Container } from '@material-ui/core'

import { OrganizerLogo } from 'footer/organizer-logo'
import { NavButtons } from 'footer/nav-buttons'
import { DownloadApp } from 'footer/download-app/index'
import { Copyright } from 'footer/copyright'

export const Footer = () => (
  <Container>
    <Box display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}>
      <OrganizerLogo />
      <NavButtons />
      <Copyright />
      <DownloadApp />
    </Box>
  </Container>
)
