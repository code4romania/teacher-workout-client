import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Field } from 'admin/edit-user/form/field'

export const ChangePassword = () => (
  <Box mt={4}>
    <Typography variant={'h5'}>
      <b>Schimbă parola</b>
    </Typography>
    <Grid container spacing={2} pt={2}>
      <Field id={'password'} label={'Parolă nouă'} halfWidth />
      <Field id={'confirmPassword'} label={'Confirmă parola'} halfWidth />
    </Grid>
  </Box>
)
