import React from 'react'
import * as Core from 'core/buttons'
import * as Material from '@mui/material'
import * as Icons from '@mui/icons-material'

export const CallButton = () => <Material.Box mt={3}>
  <Core.Buttons.Blue>
    Call to action
    <Icons.ArrowForward fontSize={'small'} />
  </Core.Buttons.Blue>
</Material.Box>

