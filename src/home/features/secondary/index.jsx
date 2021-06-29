import React from 'react'
import { Grid } from '@material-ui/core'

import { Image } from 'home/features/secondary/image'
import { About } from 'home/features/secondary/about'
import { Space } from 'home/features/secondary/space'
import { Layout } from 'home/features/secondary/layout'
import { Options } from 'home/features/secondary/options'

export const Secondary = () => <Layout>
  <Image />
  <Space />

  <Grid item xs={11} sm={10} md={10} lg={4} xl={4}>
    <About />
    <Options />
  </Grid>
</Layout>
