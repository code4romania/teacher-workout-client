import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Link } from 'layout/common/link'
import { actions } from 'layout/header/constants'
import { routesPath } from 'startup/routes'

export const About = () => <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
  <Box display={'flex'} justifyContent={'center'} py={1}>
    <Link to={routesPath.About}>{actions.about}</Link>
  </Box>
</Grid>
