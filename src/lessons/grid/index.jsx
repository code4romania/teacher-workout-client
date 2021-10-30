import React from 'react'
import { Lesson } from 'lessons/lesson'
import * as Material from '@mui/material'
import { useFetchedLessons } from 'lessons/grid/hooks/use-fetched-lessons'

export const Grid = () => <Material.Grid container>
  {
    useFetchedLessons().map((value, index) => <Lesson key={index} value={value} />)
  }
</Material.Grid>
