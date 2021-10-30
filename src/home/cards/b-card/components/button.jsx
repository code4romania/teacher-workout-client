import React from 'react'
import * as Core from 'core/buttons'
import { makeStyles } from '@mui/styles'
import * as Material from '@mui/material'
import * as Icons from '@mui/icons-material'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    [theme.breakpoints.down('md')]: { width: '100%' },
  },
}))

export const Button = () => <Material.Box mt={7} className={useStyles().root}>
  <Core.Buttons.Blue>
    Vezi toate cursurile
    <Icons.ArrowForward fontSize={'small'} />
  </Core.Buttons.Blue>
</Material.Box>

