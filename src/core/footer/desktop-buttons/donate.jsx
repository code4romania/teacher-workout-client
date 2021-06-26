import React from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    background: 'green',
    color: 'white',
  },
})

export const Donate = () => <Grid item md={3} lg={3} xl={3}>
  <Button className={useStyles().root}>
    Doneaza
  </Button>
</Grid>
