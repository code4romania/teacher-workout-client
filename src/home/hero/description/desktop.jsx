import React from 'react'
import { Box, Hidden, makeStyles, Typography } from '@material-ui/core'

const CONTENT = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum
          ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.`

const makeCommonStyles = theme => ({
  width: 0.4,
  paddingBottom: theme.spacing(2),
  justifyContent: 'center',
  alignContent: 'center',
})

const makeBreakpointStyles = theme => ({
  [theme.breakpoints.only('xs')]: { width: '100%' },
  [theme.breakpoints.only('sm')]: { width: '60%' },
  [theme.breakpoints.only('md')]: { width: '50%' },
  [theme.breakpoints.only('lg')]: { width: '40%' },
  [theme.breakpoints.only('xl')]: { width: '50%' },
})

const useStyles = makeStyles(theme => ({
  box: {
    ...makeCommonStyles(theme),
    ...makeBreakpointStyles(theme),
  },
}))

export const Desktop = () => (
  <Hidden smDown>
    <Box display={'flex'} justifyContent={'center'}>
      <Box className={useStyles().box}>
        <Typography align={'center'}>{CONTENT}</Typography>
      </Box>
    </Box>
  </Hidden>
)
