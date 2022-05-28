import React from 'react'
import { Core } from 'core'
import { Grid, Box } from '@mui/material'
import { useStyles } from 'admin/lessons/filters/hooks/use-styles'

const OPTIONS = Object.freeze([
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
])

export const Category = () => (
  <Grid item xs={12} md={4}>
    <Box className={useStyles().box}>
      <Core.Select title={'Filtrează după categorie'} options={OPTIONS} />
    </Box>
  </Grid>
);
