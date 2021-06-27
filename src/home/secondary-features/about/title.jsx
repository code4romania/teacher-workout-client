import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({ root: { fontWeight: 700 } })

export const Title = () => <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
  <Typography variant={'h5'} className={useStyles().root}>
    Always in the loop
  </Typography>
</Grid>
