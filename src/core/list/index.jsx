import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { Title, List as CustomList, Button } from 'core/list/components'

export const List = () => (
  <Grid spacing={6}>
    <Grid item md={6} lg={6} xl={6}>
      <Box container direction={'column'} justify={'center'} alignItems={'flex-start'} m={5}>
        <Title />
        <CustomList />
        <Button />
      </Box>
    </Grid>
    <Grid item md={6} lg={6} xl={6}>
      <Box />
    </Grid>
  </Grid>
)
