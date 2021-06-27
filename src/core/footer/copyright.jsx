import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  copyright: {
    order: 3,
    flexBasis: '50%',
    [theme.breakpoints.down('sm')]: { order: 4, flexBasis: '100%' },
  },
}))

export const Copyright = () => <Grid item className={useStyles().copyright}>
  <Typography color={'textSecondary'}>© 2021 Code for Romania. Toate drepturile rezervate.</Typography>
</Grid>
