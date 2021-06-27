import React from 'react'
import { Box, Hidden, Typography } from '@material-ui/core'

const CONTENT = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum
          ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.`

export const Desktop = () => (
  <Hidden smDown>
    <Box display={'flex'} justifyContent={'center'}>
      <Box alignContent={'center'} width={0.4} justifyContent={'center'} pb={2}>
        <Typography align={'center'}>{CONTENT}</Typography>
      </Box>
    </Box>
  </Hidden>
)
