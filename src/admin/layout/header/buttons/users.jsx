import React from 'react'
import { Button } from 'admin/layout/button'
import { Box, Grid } from '@material-ui/core'
import { actions } from 'admin/layout/header/constants'

export const Users = () => <Grid item xs={12} sm={'auto'}>
  <Box display={'flex'} justifyContent={'center'} py={1} px={1}>
    <Button>
      {actions.users}
    </Button>
  </Box>
</Grid>
