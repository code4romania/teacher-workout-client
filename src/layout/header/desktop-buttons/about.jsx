import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Link } from 'layout/common/link'
import { actions } from 'layout/header/constants'
import { routesPath } from 'startup/routes'

export const About = () => <Grid item>
  <Box display={'flex'} justifyContent={'center'} py={1} px={2}>
    <Link to={routesPath.About}>{actions.about}</Link>
  </Box>
</Grid>
