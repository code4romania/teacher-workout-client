import React from 'react'
import { Grid } from '@material-ui/core'

import { Image } from 'home/secondary-features/image'
import { About } from 'home/secondary-features/about'
import { Space } from 'home/secondary-features/space'
import { Layout } from 'home/secondary-features/layout'
import { Options } from 'home/secondary-features/options'

export const SecondaryFeatures = () => <Layout>
  <Image />
  <Space />

  <Grid item xs={11} sm={10} md={10} lg={4} xl={4}>
    <About />
    <Options />
  </Grid>
</Layout>
