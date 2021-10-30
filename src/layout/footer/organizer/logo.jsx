import React from 'react'
import * as Material from '@mui/material'
import Source from 'layout/footer/organizer/logo.svg'

export const Logo = () => <Material.Grid item xs={12}>
  <Material.Box maxWidth={'6.5rem'} py={2}>
    <img src={Source} alt={''} />
  </Material.Box>
</Material.Grid>
