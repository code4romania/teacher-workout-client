/* eslint-disable object-curly-newline */
import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import { Link } from 'layout/header/link'

const useStyles = makeStyles(theme => ({
  link: {
    [theme.breakpoints.down('sm')]: { textAlign: 'center', padding: '0.5rem' },
  },
}))

export const PrivacyPolicy = () => <Grid item className={useStyles().link} xs={12} sm={12} md={3} lg={3} xl={3}>
  <Link>Politica de confidențialitate</Link>
</Grid>
