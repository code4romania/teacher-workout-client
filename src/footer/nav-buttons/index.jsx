import React from 'react'
import { makeStyles, Box, Grid } from '@material-ui/core'

import { About } from 'footer/nav-buttons/about'
import { Donate } from 'footer/nav-buttons/donate'
import { PrivacyPolicy } from 'footer/nav-buttons/privacy-policy'
import { Terms } from 'footer/nav-buttons/terms'

const useStyles = makeStyles(theme => ({
  navButtons: {
    order: 4,
    [theme.breakpoints.down('sm')]: { order: 2, flexBasis: '100%' },
  },
}))

export const NavButtons = () => <Box mb={4} className={useStyles().navButtons}>
  <Grid item container justify={'flex-end'} alignItems={'center'}>
    <Terms />
    <PrivacyPolicy />
    <About />
    <Donate />
  </Grid>
</Box>
