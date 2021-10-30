import React from 'react'
import * as Material from '@material-ui/core'
import { Count } from 'admin/lessons/title/count'
import { Header } from 'admin/lessons/title/header'
import { Action } from 'admin/lessons/title/action'

export const Title = () => <Material.Grid container alignItems={'flex-end'}>
  <Material.Grid item xs={9}>
    <Header />
    <Count />
  </Material.Grid>
  <Action />
</Material.Grid>
