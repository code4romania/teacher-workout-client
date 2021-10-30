import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const CONTENT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Impedit ex obcaecati natus eligendi delectus, cum deleniti 
sunt in labore nihil quod quibusdam expedita nemo.`

export const Description = () => <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
  <Box pt={2}>
    <Typography variant={'body1'} color={'textSecondary'}>
      {CONTENT}
    </Typography>
  </Box>
</Grid>
