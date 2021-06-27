import React from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import { DownloadButtons } from 'core/footer/download-app/download-buttons'

const useStyles = makeStyles(theme => ({
  downloadApp: {
    order: 4,
    [theme.breakpoints.down('sm')]: { order: 1 },
  },
}))

export const DownloadApp = () => <Grid item className={useStyles().downloadApp}>
  <Box>
    <Box px={1.25}>
      <Typography align={'right'}>Descarcă aplicația</Typography>
    </Box>
    <DownloadButtons />
  </Box>
</Grid>
