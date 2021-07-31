import React from 'react'
import * as Material from '@material-ui/core'
import { Card } from 'lessons/lesson/card'

export const Lesson = () => <Material.Grid item xs={4}>
  <Material.Box p={3}>
    <Card />
  </Material.Box>
</Material.Grid>
