import React from 'react'
import * as Styles from '@mui/styles'
import * as Material from '@mui/material'
import { About } from 'layout/footer/buttons/about'
import { Terms } from 'layout/footer/buttons/terms'
import { Donate } from 'layout/footer/buttons/donate'
import { Privacy } from 'layout/footer/buttons/privacy'

const useStyles = Styles.makeStyles(theme => ({
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

