import React from 'react'
import { Grid } from '@mui/material'

import { Image } from 'home/features/secondary/image'
import { About } from 'home/features/secondary/about'
import { Layout } from 'home/features/secondary/layout'
import { Options } from 'home/features/secondary/options'

export const Secondary = () => <Layout>
  <Image />

  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
    <About />
    <Options />
  </Grid>
</Layout>
