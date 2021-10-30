import React from 'react'
import * as Material from '@material-ui/core'
import { Head } from 'admin/lessons/table/head'
import { Body } from 'admin/lessons/table/body'

const useStyles = Material.makeStyles({ root: { background: 'white' } })

export const Table = () => <Material.Box pt={3} className={useStyles().root} mb={15}>
  <Material.Table>
    <Head />
    <Body />
  </Material.Table>
</Material.Box>
