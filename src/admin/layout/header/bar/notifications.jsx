import React from 'react'
import * as Icons from '@material-ui/icons'
import * as Material from '@material-ui/core'

export const Notifications = () => <Material.Hidden smDown>
  <Material.Grid item>
    <Material.Box display={'flex'} justifyContent={'center'} pl={3} color={'#9CA3AF'}>
      <Icons.NotificationsOutlined fontSize={'normal'} />
    </Material.Box>
  </Material.Grid>
</Material.Hidden>
