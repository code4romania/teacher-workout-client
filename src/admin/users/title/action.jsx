import React from 'react'
import * as Material from '@material-ui/core'
import { useActionStyles } from 'admin/users/title/hooks/use-action-styles'

export const Action = () => <Material.Grid item xs={12} sm={5} md={8} lg={9}>
  <Material.Box px={1} display={'flex'} justifyContent={'flex-end'} width={1} className={useActionStyles().box}>
    <Material.Button variant={'contained'} color={'primary'} className={useActionStyles().button}>
      Adauga utilizator
    </Material.Button>
  </Material.Box>
</Material.Grid>

