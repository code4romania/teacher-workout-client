import React from 'react'
import { Link } from 'layout/common/link'
import { routesPath } from 'startup/routes'
import { Box, Grid } from '@material-ui/core'
import { actions } from 'layout/header/constants'

export const Contact = () => <Grid item md={3} lg={3} xl={3}>
  <Box py={1} display={'flex'} justifyContent={'center'}>
    <Link to={routesPath.Contact}>{actions.contact}</Link>
  </Box>
</Grid>
