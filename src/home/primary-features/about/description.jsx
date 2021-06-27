import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),

    [theme.breakpoints.only('lg')]: { paddingRight: theme.spacing(9) },
    [theme.breakpoints.only('xl')]: { paddingRight: theme.spacing(9) },
  },
}))

export const Description = () => (
  <Box className={useStyles().root}>
    <Typography variant={'body1'} color={'textSecondary'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima
      sequi recusandae, porro maiores officia assumenda aliquam laborum ab
      aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
      Totam, velit.
    </Typography>
  </Box>
)
