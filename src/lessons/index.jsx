import React from 'react'
import { Layout } from 'layout'
import { Top } from 'lessons/top'
import { Box } from '@material-ui/core'
import { Filters } from 'lessons/filters'

export const Lessons = () => <Layout>
  <Top />
  <Filters />
  <Box height={'70vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
    Lessons...
  </Box>
</Layout>
