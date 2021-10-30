import React from 'react'
import { Core } from 'core'
import { Title } from 'home/hero/title'
import { Box } from '@mui/material'
import { Description } from 'home/hero/description'

export const Hero = () => (
  <Box pt={7}>
    <Title />
    <Description />
    <Core.Buttons.Download />
  </Box>
)
