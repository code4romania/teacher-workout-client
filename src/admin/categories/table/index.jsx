import React from 'react'
import * as Styles from '@mui/styles'
import * as Material from '@mui/material'
import { Head } from 'admin/categories/table/head'
import { Body } from 'admin/categories/table/body'

const useStyles = Styles.makeStyles({ root: { background: 'white' } })

export const Table = () => <Material.Box pt={3} className={useStyles().root}>
  <Material.Table>
    <Head />
    <Body />
  </Material.Table>
</Material.Box>

