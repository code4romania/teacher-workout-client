import React from 'react'
import { Apple } from 'core/download-buttons/apple'
import { Google } from 'core/download-buttons/google'
import { Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ container: { justifyContent: 'center' } }))

export const DownloadButtons = () => <Box component={'span'}>
  <Grid container className={useStyles().container}>
    <Apple />
    <Google />
  </Grid>
</Box>
