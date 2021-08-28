import React from 'react'
import * as Icons from '@material-ui/icons'
import * as Material from '@material-ui/core'

export const Notifications = () => <Material.Hidden smDown>
  <Material.Grid item>
    <Material.Box display={'flex'} justifyContent={'center'} pl={3}>
      <Icons.NotificationsOutlined fontSize={'large'} />
    </Material.Box>
  </Material.Grid>
</Material.Hidden>
