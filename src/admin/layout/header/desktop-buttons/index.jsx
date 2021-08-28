import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import { Users } from 'admin/layout/header/desktop-buttons/users'
import { Lessons } from 'admin/layout/header/desktop-buttons/lessons'
import { Dashboard } from 'admin/layout/header/desktop-buttons/dashboard'
import { Categories } from 'admin/layout/header/desktop-buttons/categories'

export const DesktopButtons = () => <Hidden smDown>
  <Grid item container justify={'flex-end'} alignItems={'center'}>
    <Dashboard />
    <Lessons />
    <Categories />
    <Users />
  </Grid>
</Hidden>
