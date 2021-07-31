import React from 'react'
import { Layout } from 'lessons/top/layout'
import { Typography } from '@material-ui/core'

const VALUE = `
Aici ar fi un alt text care sa imputerniceasca ce zice textul de mai sus si sa 
complementeze headlineul de mai sus si sa introduca utilizaoturl in content .pwp.
`

export const Description = () => <Layout>
  <Typography variant={'body1'} color={'textSecondary'} align={'center'}>
    {VALUE}
  </Typography>
</Layout>

