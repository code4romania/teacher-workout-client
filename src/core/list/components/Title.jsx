import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const primary = {
  fontSize: 36,
  fontWeight: '700',
  lineHeight: 1.11,
  letterSpacing: '-0.03em',
  textAlign: 'left',
  marginBottom: 10,
}
const secondary = {
  fontSize: 16,
  fontWeight: '400',
  lineHeight: 1.625,
  letterSpacing: '0em',
  textAlign: 'left',
  color: '#6B7280',
  marginBottom: 4,
}

const useStyles = makeStyles(theme => ({
  primary,
  secondary,
}))

export const Title = () => {
  const classes = useStyles()

  return (
    <Box>
      <Typography className={classes.primary}>Cursuri zilnice de cateva minute</Typography>
      <Typography className={classes.secondary}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus
        eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
      </Typography>
    </Box>
  )
}
