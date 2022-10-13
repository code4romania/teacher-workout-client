import React from 'react'
import { makeStyles } from '@mui/styles'
import * as Material from '@mui/material'
import { Title } from 'layout/footer/download/title'
import { Actions } from 'layout/footer/download/actions'

const useStyles = makeStyles(theme => ({ root: { [theme.breakpoints.down('md')]: { order: -1 } } }))

export const Download = () => <Material.Grid item xs={12} lg={9} className={useStyles().root}>
  <Title />
  <Actions />
</Material.Grid>

