import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.4em',
    lineHeight: 1.1,
    color: '#1F2937',
  },
}))
export const Title = () => (
  <Typography className={useStyles().title}
              color={'textSecondary'}
              gutterBottom>
    Vrei să contribui la acest app. Vino alături de noi în echipă
  </Typography>
)
