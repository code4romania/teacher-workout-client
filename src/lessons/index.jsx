import React from 'react'
import { Layout } from 'layout'
import { Top } from 'lessons/top'
import { Grid } from 'lessons/grid'
import { More } from 'lessons/more'
import { Filters } from 'lessons/filters'
import { Behaviour } from 'lessons/behaviour'

export const Lessons = () => <Layout>
  <Behaviour />
  <Top />
  <Filters />
  <Grid />
  <More />
</Layout>
