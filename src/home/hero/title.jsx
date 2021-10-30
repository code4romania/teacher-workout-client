import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'

const useStyles = makeStyles(theme => ({
  text: {
    fontWeight: 550,
    paddingBottom: theme.spacing(4),
  },
}))

export const Title = () => <Box display={'flex'} justifyContent={'center'}>
  <Typography align={'center'} variant={'h3'} className={useStyles().text}>
    Teacher Workout
  </Typography>
</Box>
