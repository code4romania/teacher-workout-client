import { Box, Typography } from '@material-ui/core'
import React from 'react'

import { DownloadButtons } from './download-buttons'

export const DownloadApp = () => (
  <Box>
    <Box px={1.25}>
      <Typography align="right">Descarcă aplicația</Typography>
    </Box>
    <DownloadButtons />
  </Box>
)
