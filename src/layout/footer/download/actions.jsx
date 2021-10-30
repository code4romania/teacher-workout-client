import React from 'react'
import { Core } from 'core'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: { justifyContent: 'center' },
  },
}))

export const Actions = () => <Grid container className={useStyles().root}>
  <Core.Buttons.Download />
</Grid>
