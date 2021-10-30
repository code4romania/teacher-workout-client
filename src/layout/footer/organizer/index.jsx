import React from 'react'
import * as Styles from '@mui/styles'
import * as Material from '@mui/material'
import { Logo } from 'layout/footer/organizer/logo'
import { Title } from 'layout/footer/organizer/title'
import { Description } from 'layout/footer/organizer/description'

const useStyles = Styles.makeStyles(theme => ({
  root: { [theme.breakpoints.down('md')]: { justifyContent: 'center', order: 1, paddingTop: theme.spacing(4) } },
  box: { [theme.breakpoints.down('md')]: { width: '300px' }, [theme.breakpoints.down('xs')]: { width: '100%' } },
}))

export const Organizer = () => <Material.Grid item xs={12} lg={3} className={useStyles().root}>
  <Material.Box className={useStyles().box}>
    <Title />
    <Logo />
    <Description />
  </Material.Box>
</Material.Grid>
