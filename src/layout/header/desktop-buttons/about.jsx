import React from 'react'
import { Grid } from '@material-ui/core'

import { Link } from 'layout/header/link'
import { actions } from 'layout/header/constants'

export const About = () => <Grid item md={3} lg={3} xl={3}>
  <Link>{actions.about}</Link>
</Grid>
