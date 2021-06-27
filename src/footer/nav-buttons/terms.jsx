/* eslint-disable object-curly-newline */
import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import { Link } from 'header/link'

const useStyles = makeStyles(theme => ({
  link: { [theme.breakpoints.down('sm')]: { textAlign: 'center', padding: '0.5rem' } },
}))

export const Terms = () => <Grid item className={useStyles().link} xs={12} sm={12} md={3} lg={3} xl={3}>
  <Link>Termeni și condiții</Link>
</Grid>
