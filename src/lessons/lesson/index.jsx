import React from 'react'
import { Card } from 'lessons/lesson/card'
import * as Material from '@material-ui/core'

export const Lesson = () => <Material.Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
  <Material.Box p={3}>
    <Card />
  </Material.Box>
</Material.Grid>
