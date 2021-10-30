import React from 'react'
import { FormGroup, FormControl, TextField, Grid } from '@material-ui/core'
import { Buttons } from 'admin/add-category/form/buttons'

export const Form = () => (
  <Grid sm={9}>
    <FormGroup>
      <FormControl>
        <TextField id={'name'} multiline label={'Denumire categorie'} rows={4} />
      </FormControl>
    </FormGroup>
    <FormGroup>
      <FormControl>
        <TextField id={'description'} multiline label={'Descriere categorie'} rows={4} />
      </FormControl>
    </FormGroup>
    <Buttons />
  </Grid>
)
