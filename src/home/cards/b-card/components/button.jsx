import React from 'react'
import * as Core from 'core/buttons'
import * as Icons from '@material-ui/icons'
import * as Material from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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

