import React from 'react'
import { Apple } from 'core/buttons/download/apple'
import { Google } from 'core/buttons/download/google'
import { Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ container: { justifyContent: 'center' } }))

export const Download = () => <Box component={'span'}>
  <Grid container className={useStyles().container}>
    <Apple />
    <Google />
  </Grid>
</Box>
