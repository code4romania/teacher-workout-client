import React from 'react'
import * as Material from '@material-ui/core'
import { Title } from 'layout/footer/download/title'
import { Actions } from 'layout/footer/download/actions'

const useStyles = Material.makeStyles(theme => ({ root: { [theme.breakpoints.down('md')]: { order: -1 } } }))

export const Download = () => <Material.Grid item xs={12} lg={9} className={useStyles().root}>
  <Title />
  <Actions />
</Material.Grid>

