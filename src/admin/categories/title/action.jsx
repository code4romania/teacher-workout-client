import React from 'react'
import * as Material from '@material-ui/core'
import { useActionStyles } from 'admin/categories/title/hooks/use-action-styles'

export const Action = () => <Material.Grid item xs={12} md={3}>
  <Material.Box px={1} display={'flex'} justifyContent={'flex-end'} width={1} className={useActionStyles().box}>
    <Material.Button variant={'contained'} color={'primary'} className={useActionStyles().button}>
      Adauga categorie
    </Material.Button>
  </Material.Box>
</Material.Grid>

