import React from 'react'
import { Grid } from '@material-ui/core'
import { Users } from 'admin/layout/header/buttons/users'
import { Lessons } from 'admin/layout/header/buttons/lessons'
import { Dashboard } from 'admin/layout/header/buttons/dashboard'
import { Categories } from 'admin/layout/header/buttons/categories'
import { Spacing } from 'layout/common/spacing'

export const Buttons = () => <Spacing>
  <Grid container justify={'flex-start'} alignItems={'center'}>
    <Dashboard />
    <Lessons />
    <Categories />
    <Users />
  </Grid>
</Spacing>

