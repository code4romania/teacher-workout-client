import React from 'react'
import { Core } from 'core'
import { Box, Grid } from '@mui/material'
import { useStyles } from 'admin/lessons/filters/hooks/use-styles'

const OPTIONS = Object.freeze([
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
])

export const Status = () => (
  <Grid item xs={12} md={4}>
    <Box className={useStyles().box}>
      <Core.Select title={'Filtrează după status'} options={OPTIONS} />
    </Box>
  </Grid>
);
