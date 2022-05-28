import React from 'react'
import { Grid, Box } from '@mui/material'
import { Search } from 'admin/lessons/filters/search'
import { Status } from 'admin/lessons/filters/status'
import { Category } from 'admin/lessons/filters/category'

export const Filters = () => (
  <Box mt={5} mb={3} width={1}>
    <Grid container columnSpacing={3} rowSpacing={2}>
      <Category />
      <Status />
      <Search />
    </Grid>
  </Box>
);
