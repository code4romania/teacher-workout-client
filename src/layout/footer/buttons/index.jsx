import React from 'react'
import * as Material from '@material-ui/core'
import { About } from 'layout/footer/buttons/about'
import { Terms } from 'layout/footer/buttons/terms'
import { Donate } from 'layout/footer/buttons/donate'
import { Privacy } from 'layout/footer/buttons/privacy'

const useStyles = Material.makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      order: 0,
      paddingTop: theme.spacing(4),
    },
  },
}))

export const Buttons = () => <Material.Grid item xs={12} lg={7} className={useStyles().root}>
  <Terms />
  <About />
  <Privacy />
  <Donate />
</Material.Grid>

