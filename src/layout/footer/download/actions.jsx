import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { DownloadButtons } from 'core/download-buttons'

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: { justifyContent: 'center' },
  },
}))

export const Actions = () => <Grid container className={useStyles().root}>
  <DownloadButtons />
</Grid>
