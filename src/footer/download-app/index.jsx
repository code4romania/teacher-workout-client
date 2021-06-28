import React from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import { DownloadButtons } from 'footer/download-app/download-buttons'

const useStyles = makeStyles(theme => ({
  downloadApp: {
    order: 4,
    flexBasis: '50%',
    [theme.breakpoints.down('sm')]: { order: 1, flexBasis: '100%' },
  },
  text: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: { textAlign: 'left' },
  },
}))

export const DownloadApp = () => <Grid item className={useStyles().downloadApp}>
  <Box>
    <Box px={1.25}>
      <Typography className={useStyles().text} align={'right'}>Descarcă aplicația</Typography>
    </Box>
    <Grid container justify={'flex-end'}>
      <DownloadButtons />
    </Grid>
  </Box>
</Grid>
