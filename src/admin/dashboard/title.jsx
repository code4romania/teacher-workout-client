import React from 'react'
import * as Material from '@material-ui/core'

export const Title = () => <Material.Grid item>
  <Material.Box display={'inline-block'} pt={6} pb={3}>
    <Material.Typography variant={'h4'}>
      <strong>Dashboard</strong>
    </Material.Typography>
  </Material.Box>
</Material.Grid>
