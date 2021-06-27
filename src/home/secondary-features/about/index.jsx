import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { Title } from 'home/secondary-features/about/title'
import { Description } from 'home/secondary-features/about/description'

export const About = () => <Box pt={10}>
  <Grid container>
    <Title />
    <Description />
  </Grid>
</Box>
