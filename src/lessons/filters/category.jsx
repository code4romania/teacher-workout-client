import React from 'react'
import { Grid, MenuItem, Select } from '@material-ui/core'

export const Category = () => <Grid item xs={2}>
  <Select value={'all'} label={'Category'} fullWidth>
    <MenuItem value={'all'}>All</MenuItem>
    <MenuItem value={'one'}>One</MenuItem>
    <MenuItem value={'two'}>Two</MenuItem>
  </Select>
</Grid>
