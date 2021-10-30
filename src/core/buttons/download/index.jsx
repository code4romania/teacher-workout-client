import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Box } from '@mui/material'
import { Apple } from 'core/buttons/download/apple'
import { Google } from 'core/buttons/download/google'

const useStyles = makeStyles(() => ({ container: { justifyContent: 'center' } }))

export const Download = () => <Box component={'span'}>
  <Grid container className={useStyles().container}>
    <Apple />
    <Google />
  </Grid>
</Box>
