import React from 'react'
import * as Material from '@material-ui/core'
import { Adornment } from 'admin/layout/header/bar/adornment'

export const Search = () => {
  const inputProps = { startAdornment: <Adornment /> }

  return <Material.Grid container justify={'flex-end'}>
    <Material.TextField variant={'outlined'} placeholder={'Cauta'} size={'small'} InputProps={inputProps} />
  </Material.Grid>
}
