import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  copyright: {
    order: 3,
    [theme.breakpoints.down('sm')]: { order: 4 },
  },
}))

export const Copyright = () => <Grid item className={useStyles().copyright}>
  <Typography>© 2021 Code for Romania. Toate drepturile rezervate.</Typography>
</Grid>
