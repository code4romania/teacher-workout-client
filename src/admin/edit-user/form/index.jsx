import React from 'react'
import { Grid } from '@mui/material'
import { Field } from 'admin/edit-user/form/field'
import { Buttons } from 'admin/edit-user/form/buttons'
import { SelectRole } from 'admin/edit-user/form/select'
import { ChangePassword } from 'admin/edit-user/form/change-password'

export const Form = () => (
  <>
    <Grid container spacing={2}>
      <Field id={'lastName'} label={'Nume'} halfWidth />
      <Field id={'firstName'} label={'Prenume'} halfWidth />
      <Field id={'phone'} label={'Telefon'} halfWidth />
      <Field id={'email'} label={'Email'} halfWidth />
      <SelectRole />
    </Grid>
    <ChangePassword />
    <Grid item container justify={'flex-end'}>
      <Buttons />
    </Grid>
  </>
)
