import React from 'react'
import { Box } from '@material-ui/core'

import { Title } from 'home/hero/title'
import { Description } from 'home/hero/description'
import { DownloadButtons } from 'home/hero/download-buttons'

export const Hero = () => (
  <Box pt={7}>
    <Title />
    <Description />
    <DownloadButtons />
  </Box>
)
