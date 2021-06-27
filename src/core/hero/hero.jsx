import React from 'react'
import { Box } from '@material-ui/core'

import { Title } from 'core/hero/title'
import { Description } from 'core/hero/description'
import { DownloadButtons } from 'core/hero/download-buttons'

export const Hero = () => (
  <Box pt={7}>
    <Title />
    <Description />
    <DownloadButtons />
  </Box>
)
