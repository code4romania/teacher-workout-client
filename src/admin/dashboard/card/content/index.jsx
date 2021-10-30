import React from 'react'
import * as Material from '@mui/material'
import { Icon } from 'admin/dashboard/card/content/icon'
import { Body } from 'admin/dashboard/card/content/body'

export const Content = () => <Material.CardContent>
  <Material.Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
    <Icon />
    <Body />
  </Material.Box>
</Material.CardContent>
