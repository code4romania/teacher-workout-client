import React from 'react'
import * as Material from '@mui/material'
import { Count } from 'admin/categories/title/count'
import { Header } from 'admin/categories/title/header'
import { Action } from 'admin/categories/title/action'

export const Title = () => <Material.Grid container alignItems={'flex-end'}>
  <Material.Grid item xs={9}>
    <Header />
    <Count />
  </Material.Grid>
  <Action />
</Material.Grid>
