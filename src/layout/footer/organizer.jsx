import React from 'react'
import Logo from 'layout/footer/logo.svg'
import * as Material from '@material-ui/core'

const useStyles = Material.makeStyles(theme => ({
  root: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 3,
      flexBasis: '100%',
    },
  },
}))

export const Organizer = () => <Material.Grid item className={useStyles().root}>
  <Material.Box maxWidth={'18.75rem'} mb={4}>
    <Material.Typography color={'textSecondary'}>Un proiect</Material.Typography>
    <Material.Box maxWidth={'6.5rem'}>
      <img src={Logo} alt={'Code for Romania'} />
    </Material.Box>
    <Material.Typography color={'textSecondary'}>
      Organizație independentă, non-partizană, apolitică, non-guvernamentală.
    </Material.Typography>
  </Material.Box>
</Material.Grid>
