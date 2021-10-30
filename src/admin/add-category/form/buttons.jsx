import React from 'react'
import { Core } from 'core'
import { Box, Grid } from '@mui/material'

export const Buttons = () => (
  <Box display={'flex'} mt={2.5}>
    <Grid item>
      <Core.LinkButtons.Secondary to={`/admin/categories`}>Anulează</Core.LinkButtons.Secondary>
    </Grid>
    <Box ml={2}>
      <Grid item>
        <Core.Buttons.Blue>Salvează</Core.Buttons.Blue>
      </Grid>
    </Box>
  </Box>
)
