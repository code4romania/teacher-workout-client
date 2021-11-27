import React from 'react'
import { Core } from 'core'
import * as Material from '@mui/material'
import { useActionStyles } from 'admin/users/title/hooks/use-action-styles'
import { useActionCallback } from 'admin/users/title/hooks/use-action-callback'

export const Action = () => <Material.Grid item xs={12} md={3}>
  <Material.Box px={1} display={'flex'} justifyContent={'flex-end'} width={1} className={useActionStyles().box}>
    <Core.Buttons.Blue onClick={useActionCallback()}>Adauga utilizator</Core.Buttons.Blue>
  </Material.Box>
</Material.Grid>

