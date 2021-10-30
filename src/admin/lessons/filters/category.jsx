import React from 'react'
import { Core } from 'core'
import * as Material from '@material-ui/core'
import { useStyles } from 'admin/lessons/filters/hooks/use-styles'

const OPTIONS = Object.freeze([
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
])

export const Category = () => <Material.Grid item xs={12} md={4}>
  <Material.Box pr={3} className={useStyles().box}>
    <Core.Select title={'Filtrează după categorie'} options={OPTIONS} />
  </Material.Box>
</Material.Grid>
