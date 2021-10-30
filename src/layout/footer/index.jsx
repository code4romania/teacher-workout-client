import React from 'react'
import * as Material from '@mui/material'
import { Buttons } from 'layout/footer/buttons'
import { Download } from 'layout/footer/download'
import { Organizer } from 'layout/footer/organizer'
import { Copyright } from 'layout/footer/copyright'

export const Footer = () => <Material.Box py={8} width={1}>
  <Material.Grid container>
    <Organizer />
    <Download />
    <Copyright />
    <Buttons />
  </Material.Grid>
</Material.Box>
