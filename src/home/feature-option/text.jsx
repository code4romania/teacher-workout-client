import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { Title } from 'home/feature-option/title'
import { Description } from 'home/feature-option/description'

export const Text = props => <Grid item xs={10} sm={11} lg={11} xl={11}>
  <Box pt={4}>
    <Title {...props} />
    <Description {...props} />
  </Box>
</Grid>
