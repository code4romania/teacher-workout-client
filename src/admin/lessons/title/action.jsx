import React from 'react'
import { Core } from 'core'
import * as Material from '@mui/material'
import { useActionStyles } from 'admin/lessons/title/hooks/use-action-styles'

export const Action = () => <Material.Grid item xs={12} md={3}>
  <Material.Box px={1} display={'flex'} justifyContent={'flex-end'} width={1} className={useActionStyles().box}>
    <Core.LinkButtons.Primary to={`/admin/lessons/new`}>Adaugă lecție nouă</Core.LinkButtons.Primary>
  </Material.Box>
</Material.Grid>
