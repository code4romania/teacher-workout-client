import React from 'react'
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

export const SelectRole = () => (
  <Grid item xs={12} md={6}>
    <FormControl fullWidth>
      <InputLabel id={'role-label'}>Role</InputLabel>
      <Select labelId={'role-label'}
              label={'Role'}>
        <MenuItem value={'admin'}>Admin</MenuItem>
        <MenuItem value={'editor'}>Editor</MenuItem>
        <MenuItem value={'author'}>Author</MenuItem>
      </Select>
    </FormControl>
  </Grid>
)
