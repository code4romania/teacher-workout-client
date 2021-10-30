import React from 'react'
import { Grid } from '@mui/material'
import { Field } from 'admin/add-category/form/field'
import { Buttons } from 'admin/add-category/form/buttons'

export const Form = () => (
  <Grid container>
    <Grid item xs={12} md={9}>
      <Field id={'name'} label={'Denumire categorie'} halfWidth />
      <Field id={'description'} label={'Descriere categorie'} rows={4} />
      <Grid item container justify={'flex-end'}>
        <Buttons />
      </Grid>
    </Grid>
  </Grid>
)
