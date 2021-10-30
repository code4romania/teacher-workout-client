import React from 'react'
import * as Material from '@mui/material'
import { Search } from 'admin/lessons/filters/search'
import { Status } from 'admin/lessons/filters/status'
import { Category } from 'admin/lessons/filters/category'

export const Filters = () => <Material.Box py={3} width={1}>
  <Material.Grid container>
    <Category />
    <Status />
    <Search />
  </Material.Grid>
</Material.Box>
