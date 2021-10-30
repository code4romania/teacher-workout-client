import React from 'react'
import * as Material from '@material-ui/core'
import { Count } from 'admin/lessons/title/count'
import { Header } from 'admin/lessons/title/header'

export const Title = () => <Material.Grid container alignItems={'flex-end'}>
  <Material.Grid item xs={9}>
    <Header />
    <Count />
  </Material.Grid>
</Material.Grid>
