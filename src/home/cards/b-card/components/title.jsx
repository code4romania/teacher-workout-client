import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const primary = {
  fontSize: 36,
  fontWeight: '700',
  lineHeight: 1.11,
  letterSpacing: '-0.03em',
  marginBottom: 10,
}
const secondary = {
  fontSize: 16,
  fontWeight: '400',
  lineHeight: 1.625,
  letterSpacing: 0,
  color: '#6B7280',
  marginBottom: 4,
}

const useStyles = makeStyles(() => ({
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
