import React from 'react'
import * as Material from '@material-ui/core'
import { Icons } from 'admin/dashboard/card/icons/icons'
import { useContext } from 'admin/dashboard/card/context'
import { useStyles } from 'admin/dashboard/card/content/hooks/use-styles'

const useProperties = () => ({
  className: useStyles().wrapper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Icon = () => <Material.Box {...useProperties()}>
  <img src={Icons[useContext().icon]} alt={'card icon'} />
</Material.Box>
