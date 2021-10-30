import React from 'react'
import { Grid, MenuItem, Select } from '@mui/material'

export const Category = () => <Grid item xs={2}>
  <Select value={'all'} label={'Category'} fullWidth>
    <MenuItem value={'all'}>All</MenuItem>
    <MenuItem value={'one'}>One</MenuItem>
    <MenuItem value={'two'}>Two</MenuItem>
  </Select>
</Grid>
