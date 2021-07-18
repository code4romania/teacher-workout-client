import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

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
