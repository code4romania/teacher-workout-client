import React from 'react'
import { Grid } from '@material-ui/core'

import { Link } from 'header/link'
import { actions } from 'header/constants'

export const Lessons = () => <Grid item md={3} lg={3} xl={3}>
  <Link>{actions.lessons}</Link>
</Grid>
