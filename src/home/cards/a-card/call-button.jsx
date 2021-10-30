import React from 'react'
import * as Core from 'core/buttons'
import * as Icons from '@material-ui/icons'
import * as Material from '@material-ui/core'

export const CallButton = () => <Material.Box mt={3}>
  <Core.Buttons.Blue>
    Call to action
    <Icons.ArrowForward fontSize={'small'} />
  </Core.Buttons.Blue>
</Material.Box>

