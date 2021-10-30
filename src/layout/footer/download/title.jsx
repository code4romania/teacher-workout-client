import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const useStyles = makeStyles(theme => ({
  text: {
    textAlign: 'right',
    [theme.breakpoints.down('md')]: { textAlign: 'center' },
  },
}))

export const Title = () => <Typography className={useStyles().text} variant={'h6'} color={'textSecondary'}>
  <strong>
    Descarcă aplicația
  </strong>
</Typography>

