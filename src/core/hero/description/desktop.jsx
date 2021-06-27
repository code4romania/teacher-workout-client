import React from 'react'
import { Box, Hidden, Typography } from '@material-ui/core'

const CONTENT = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum
          ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.`

export const Desktop = () => <Hidden smDown>
  <Box display={'flex'} justifyContent={'center'}>
    <Box alignContent={'center'} width={'33%'} justifyContent={'center'}>
      <Typography align={'center'}>
        {CONTENT}
      </Typography>
      <Box height={'7px'} />
    </Box>
  </Box>
</Hidden>
