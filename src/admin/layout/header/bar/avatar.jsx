import React from 'react'
import * as Material from '@material-ui/core'
import * as Icons from '@material-ui/icons'

export const Avatar = () => <Material.Hidden smDown>
  <Material.Grid item>
    <Material.Box display={'flex'} justifyContent={'center'} pl={3}>
      <Icons.RadioButtonUnchecked fontSize={'large'} />
    </Material.Box>
  </Material.Grid>
</Material.Hidden>
