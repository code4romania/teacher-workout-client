import React from 'react'
import { Link } from 'layout/common/link'
import { routesPath } from 'startup/routes'
import { Box, Grid } from '@material-ui/core'
import { actions } from 'layout/header/constants'

export const Lessons = () => <Grid item>
  <Box py={1} px={2} display={'flex'} justifyContent={'center'}>
    <Link to={routesPath.Lessons}>{actions.lessons}</Link>
  </Box>
</Grid>
