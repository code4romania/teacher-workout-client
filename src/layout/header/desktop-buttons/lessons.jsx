import React from 'react'
import { Link } from 'layout/common/link'
import { Box, Grid } from '@material-ui/core'
import { routesPath } from 'startup/routes'
import { actions } from 'layout/header/constants'

export const Lessons = () => <Grid item md={3} lg={3} xl={3}>
  <Box py={1} display={'flex'} justifyContent={'center'}>
    <Link to={routesPath.Lessons}>{actions.lessons}</Link>
  </Box>
</Grid>
