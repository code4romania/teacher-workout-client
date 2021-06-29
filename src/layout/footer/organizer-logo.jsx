import React from 'react'
import { makeStyles, Grid, Box, Typography } from '@material-ui/core'
import Logo from 'layout/footer/code4romania-full.svg'

const useStyles = makeStyles(theme => ({
  organizerLogo: {
    order: 1,
    [theme.breakpoints.down('sm')]: { order: 3, flexBasis: '100%' },
  },
}))

export const OrganizerLogo = () => <Grid item className={useStyles().organizerLogo}>
  <Box maxWidth={'18.75rem'} mb={4}>
    <Typography color={'textSecondary'}>Un proiect</Typography>
    <Box maxWidth={'6.5rem'}>
      <img src={Logo} alt={'Code for Romania'} />
    </Box>
    <Typography color={'textSecondary'}>
      Organizație independentă, non-partizană, apolitică, non-guvernamentală.
    </Typography>
  </Box>
</Grid>
