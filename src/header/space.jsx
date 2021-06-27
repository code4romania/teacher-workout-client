import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: 0,
    [theme.breakpoints.only('xs')]: { width: 200 },
    [theme.breakpoints.only('sm')]: { width: 200 },
    [theme.breakpoints.only('md')]: { width: 400 },
    [theme.breakpoints.only('lg')]: { width: 1300 },
    [theme.breakpoints.only('xl')]: { width: 1900 },
  },
}))

export const Space = () => <Box className={useStyles().root} />
