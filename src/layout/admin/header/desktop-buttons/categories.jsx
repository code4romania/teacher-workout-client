import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Button } from 'layout/admin/common/button'
import { actions } from 'layout/admin/header/constants'

export const Categories = () => <Grid item>
  <Box display={'flex'} justifyContent={'center'} py={1} px={1}>
    <Button>
      {' '}
      {actions.categories}
      {' '}
    </Button>
  </Box>
</Grid>
