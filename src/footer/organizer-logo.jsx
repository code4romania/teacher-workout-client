import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core'
import Logo from 'footer/code4romania-full.svg'

const useStyles = makeStyles(theme => ({
  organizerLogo: {
    order: 1,
    maxWidth: 302,
    marginBottom: 32,
    [theme.breakpoints.down('sm')]: { order: 3, flexBasis: '100%' },
  },
}))

export const OrganizerLogo = () => <Box className={useStyles().organizerLogo}>
  <Typography color={'textSecondary'}>Un proiect</Typography>
  <Box maxWidth={'6.5rem'}>
    <img src={Logo} alt={'Code for Romania'} />
  </Box>
  <Typography color={'textSecondary'}>
    Organizație independentă, non-partizană, apolitică, non-guvernamentală.
  </Typography>
</Box>
