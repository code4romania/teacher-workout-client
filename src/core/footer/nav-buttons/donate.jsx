import React from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'green',
    color: 'white',
    [theme.breakpoints.down('sm')]: { width: '100%' },
  },
  link: { [theme.breakpoints.down('sm')]: { textAlign: 'center', padding: '0.5rem' } },
}))

export const Donate = () => <Grid item className={useStyles().link} xs={12} sm={12} md={3} lg={3} xl={3}>
  <Button className={useStyles().root}>
    Doneaza
  </Button>
</Grid>
