import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Button } from 'admin/layout/button'
import { actions } from 'admin/layout/header/constants'

export const Lessons = () => <Grid item>
  <Box display={'flex'} justifyContent={'center'} py={1} px={1}>
    <Button>
      {' '}
      {actions.lessons}
      {' '}
    </Button>
  </Box>
</Grid>
