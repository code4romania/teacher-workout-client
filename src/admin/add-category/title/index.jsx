import React from 'react'
import * as Material from '@mui/material'
import { Header } from 'admin/add-category/title/header'

export const Title = () => <Material.Grid container alignItems={'flex-end'}>
  <Material.Grid item xs={9}>
    <Header />
  </Material.Grid>
</Material.Grid>
