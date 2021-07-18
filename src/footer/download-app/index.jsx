import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import { DownloadButtons } from 'footer/download-app/download-buttons'

const useStyles = makeStyles(theme => ({
  downloadApp: {
    order: 2,
    flexBasis: '50%',
    [theme.breakpoints.down('sm')]: { order: 1, flexBasis: '100%' },
  },
  text: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: { textAlign: 'left' },
  },
}))

export const DownloadApp = () => <Box className={useStyles().downloadApp}>
  <Box>
    <Typography className={useStyles().text} align={'right'}>Descarcă aplicația</Typography>
  </Box>
  <DownloadButtons />
</Box>
