import React from 'react'
import { Box } from '@material-ui/core'
import { Link } from 'layout/common/link'
import { routesPath } from 'startup/routes'
import { actions } from 'layout/header/constants'

export const About = () => <Box display={'flex'} justifyContent={'center'} py={1} px={2}>
  <Link to={routesPath.About}>{actions.about}</Link>
</Box>

