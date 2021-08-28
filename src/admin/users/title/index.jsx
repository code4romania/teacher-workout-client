import React from 'react'
import * as Material from '@material-ui/core'
import { Count } from 'admin/users/title/count'
import { Header } from 'admin/users/title/header'
import { Action } from 'admin/users/title/action'

export const Title = () => <Material.Grid container alignItems={'flex-end'}>
  <Header />
  <Count />
  <Action />
</Material.Grid>
