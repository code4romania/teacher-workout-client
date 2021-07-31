import React from 'react'
import { Grid } from '@material-ui/core'
import { Name } from 'lessons/filters/name'
import { Layout } from 'lessons/filters/layout'
import { Category } from 'lessons/filters/category'

export const Filters = () => <Layout>
  <Name />
  <Grid item xs={1} />
  <Category />
</Layout>

