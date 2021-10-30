import React from 'react'
import { Core } from 'core'
import * as Router from 'react-router-dom'
import * as Material from '@material-ui/core'
import { useActionStyles } from 'admin/categories/title/hooks/use-action-styles'

export const Action = () => <Material.Grid item xs={12} md={3}>
  <Material.Box px={1} display={'flex'} justifyContent={'flex-end'} width={1} className={useActionStyles().box}>
    <Router.Link to={`/admin/categories/new`}>
      <Core.Buttons.Blue>
      Adauga categorie
    </Core.Buttons.Blue>
    </Router.Link>
  </Material.Box>
</Material.Grid>

