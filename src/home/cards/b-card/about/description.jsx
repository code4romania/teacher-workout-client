import React from 'react'
import { Box, Typography } from '@material-ui/core'

const CONTENT = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus 
eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo. `

export const Description = () => <Box pt={2}>
  <Typography color={'textSecondary'}>
    {CONTENT}
  </Typography>
</Box>
