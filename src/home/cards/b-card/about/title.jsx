import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const useStyles = makeStyles({ root: { fontWeight: 700 } })

export const Title = () => <Typography variant={'h5'} className={useStyles().root}>
  Cursuri zilnice de cateva minute
</Typography>
