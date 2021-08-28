import React from 'react'
import * as Material from '@material-ui/core'
import { Head } from 'admin/users/table/head'
import { Body } from 'admin/users/table/body'

export const Table = () => <Material.Box pt={5}>
  <Material.Table>
    <Head />
    <Body />
  </Material.Table>
</Material.Box>

