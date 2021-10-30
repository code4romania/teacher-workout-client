import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Typography } from '@mui/material'

const useStyles = makeStyles({ root: { fontWeight: 700 } })

export const Title = () => <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
  <Typography variant={'h5'} className={useStyles().root}>
    Always in the loop
  </Typography>
</Grid>
