import React from 'react'
import * as Material from '@material-ui/core'
import { Icon } from 'admin/dashboard/card/content/icon'
import { Body } from 'admin/dashboard/card/content/body'

export const Content = () => <Material.CardContent>
  <Material.Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
    <Icon />
    <Body />
  </Material.Box>
</Material.CardContent>
