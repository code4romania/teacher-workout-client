import React from 'react'
import { Layout } from 'layout'
import { Top } from 'lessons/top'
import { Box } from '@material-ui/core'

export const Lessons = () => <Layout>
  <Top />
  <Box height={'70vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
    Lessons...
  </Box>
</Layout>
