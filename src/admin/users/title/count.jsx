import React from 'react'
import * as Material from '@material-ui/core'

export const Count = () => <Material.Grid item>
  <Material.Box pb={0.3} pl={1}>
    <Material.Typography color={'primary'}>
      <strong>(6 utilizatori)</strong>
    </Material.Typography>
  </Material.Box>
</Material.Grid>
