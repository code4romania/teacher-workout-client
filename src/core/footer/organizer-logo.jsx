import React from 'react'
import { Box } from '@material-ui/core'
import Logo from 'core/footer/logo.png'

export const OrganizerLogo = () => (
  <Box maxWidth={'300px'}>
    <p>Un proiect</p>
    <img src={Logo} alt={'Code for Romania'} />
    <p>Organizație independentă, non-partizană, apolitică, non-guvernamentală.</p>
  </Box>
)
