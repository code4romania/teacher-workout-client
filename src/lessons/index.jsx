import React from 'react'
import { Layout } from 'layout'
import { Top } from 'lessons/top'
import { Filters } from 'lessons/filters'
import { Behaviour } from 'lessons/behaviour'
import { Placeholder } from 'lessons/placeholder'
import { Grid } from 'lessons/grid'

export const Lessons = () => <Layout>
  <Behaviour />
  <Top />
  <Filters />
  <Grid />
  <Placeholder />
</Layout>
