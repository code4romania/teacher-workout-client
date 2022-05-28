import React from 'react'
import { makeStyles } from '@mui/styles'
import * as Material from '@mui/material'
import { Head } from 'admin/lessons/table/head'
import { Body } from 'admin/lessons/table/body'

const useStyles = makeStyles({ root: { background: 'white' } })

export const Table = () => <Material.Box pt={3} className={useStyles().root} mb={15}>
  <Material.Table>
    <Head />
    <Body />
  </Material.Table>
</Material.Box>
