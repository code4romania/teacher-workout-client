import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

import { About } from 'layout/footer/nav-buttons/about'
import { Donate } from 'layout/footer/nav-buttons/donate'
import { PrivacyPolicy } from 'layout/footer/nav-buttons/privacy-policy'
import { Terms } from 'layout/footer/nav-buttons/terms'

const useStyles = makeStyles(theme => ({
  navButtons: {
    order: 4,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: { order: 2, flexBasis: '100%', flexWrap: 'wrap' },
  },
}))

export const NavButtons = () => <Box mb={4} className={useStyles().navButtons}>
  <Terms />
  <PrivacyPolicy />
  <About />
  <Donate />
</Box>
