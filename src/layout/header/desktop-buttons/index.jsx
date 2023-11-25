import React from 'react'
import { Grid } from '@mui/material'
import { About } from 'layout/header/desktop-buttons/about'
import { Donate } from 'layout/header/desktop-buttons/donate'
import { Contact } from 'layout/header/desktop-buttons/contact'
import { Lessons } from 'layout/header/desktop-buttons/lessons'

export const DesktopButtons = () => (
  <Grid item container justifyContent={'flex-end'} alignItems={'center'}>
    <About />
    <Lessons />
    <Contact />
    <Donate />
  </Grid>
)
