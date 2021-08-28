import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import { Users } from 'layout/admin/header/desktop-buttons/users'
import { Lessons } from 'layout/admin/header/desktop-buttons/lessons'
import { Dashboard } from 'layout/admin/header/desktop-buttons/dashboard'
import { Categories } from 'layout/admin/header/desktop-buttons/categories'

export const DesktopButtons = () => <Hidden smDown>
  <Grid item container justify={'flex-end'} alignItems={'center'}>
    <Dashboard />
    <Lessons />
    <Categories />
    <Users />
  </Grid>
</Hidden>
