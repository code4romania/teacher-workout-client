import React from 'react'
import { Lesson } from 'lessons/lesson'
import * as Material from '@material-ui/core'

export const Grid = () => <Material.Grid container>
  {
    [...Array(50).keys()].map((_, index) => <Lesson key={index} />)
  }
</Material.Grid>
