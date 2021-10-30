import React from 'react'
import { Grid } from '@mui/material'

import { Image } from 'home/features/primary/image'
import { About } from 'home/features/primary/about'
import { Layout } from 'home/features/primary/layout'
import { Options } from 'home/features/primary/options'

export const Primary = () => (
  <Layout>
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <About />
        <Options />
      </Grid>

      <Image />
    </Grid>
  </Layout>
)
