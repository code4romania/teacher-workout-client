import React from 'react'
import * as Icons from '@mui/icons-material'
import * as Material from '@mui/material'

export const Notifications = () => <Material.Hidden smDown>
  <Material.Grid item>
    <Material.Box display={'flex'} justifyContent={'center'} pl={3} color={'#9CA3AF'}>
      <Icons.NotificationsOutlined fontSize={'default'} />
    </Material.Box>
  </Material.Grid>
</Material.Hidden>
