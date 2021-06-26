import { Box, Typography } from '@material-ui/core'
import React from 'react'

export const Description = () => (
  <div>
    <Box display={'flex'} justifyContent={'center'}>
      <Box alignContent={'center'} width={'33%'} justifyContent={'center'}>
        <Typography align={'center'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum
          ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
        </Typography>
        <Box height={'7px'} />
      </Box>
    </Box>
  </div>
)
