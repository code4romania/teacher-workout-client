import React from 'react'
import { Box, Grid } from '@mui/material'

import { Title } from 'home/features/option/title'
import { Description } from 'home/features/option/description'

export const Text = props => (
  <Grid item xs={10} sm={11} md={11} lg={11} xl={11}>
    <Box pt={4}>
      <Title {...props} />
      <Description {...props} />
    </Box>
  </Grid>
)
