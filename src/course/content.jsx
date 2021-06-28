import React from 'react'
import { Grid } from '@material-ui/core'

import { Title } from 'course/content/title'
import { List } from 'course/content/list'
import { useCourses } from 'course/hooks/use-courses'

export const Content = () => <Grid container justify={'center'} alignContent={'center'}>
  <Title />
  <List courses={useCourses()} />
</Grid>
