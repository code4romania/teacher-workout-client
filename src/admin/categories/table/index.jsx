import React from 'react'
import * as Material from '@material-ui/core'
import { Head } from 'admin/categories/table/head'
import { Body } from 'admin/categories/table/body'

const useStyles = Material.makeStyles({ root: { background: 'white' } })

export const Table = () => <Material.Box pt={3} className={useStyles().root}>
  <Material.Table>
    <Head />
    <Body />
  </Material.Table>
</Material.Box>

