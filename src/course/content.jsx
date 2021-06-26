import React from 'react'
import { List, ListItem } from '@material-ui/core'

import { Card } from 'course/content/card'
import { useCourses } from 'course/hooks/use-courses'

export const Content = () => <List>
  {useCourses().map(course => <ListItem key={course.title}>
    <Card course={course} />
  </ListItem>)}
</List>
