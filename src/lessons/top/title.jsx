import React from 'react'
import { Layout } from 'lessons/top/layout'
import { Typography } from '@material-ui/core'

const VALUE = 'Cursuri zilnice de doar câteva minute pentru a te pregăti temeinic'

export const Title = () => <Layout>
  <Typography variant={'h4'} align={'center'}>
    <strong>{VALUE}</strong>
  </Typography>
</Layout>

