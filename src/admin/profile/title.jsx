import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '31px',
    marginBottom: '62px',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: 1.875,
    color: '#111827',
  },
}))

export const Title = () => (
  <Typography variant={'h1'} className={useStyles().title}>
    Profilul meu
  </Typography>
)
