import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'

import { Link } from 'layout/common/link'
import { routesPath } from 'startup/routes'

const useStyles = makeStyles(theme => ({ link: { [theme.breakpoints.down('sm')]: { textAlign: 'center' } } }))

export const Terms = () => <Grid item className={useStyles().link} xs={12} sm={12} md={3} lg={3} xl={3}>
  <Box p={1}>
    <Link to={routesPath.TermsAndConditions}>Termeni și condiții</Link>
  </Box>
</Grid>
