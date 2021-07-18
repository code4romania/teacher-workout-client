import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  copyright: {
    order: 3,
    [theme.breakpoints.down('sm')]: { order: 4, flexBasis: '100%', paddingTop: 22, paddingBottom: 22 },
  },
}))

export const Copyright = () => <Box className={useStyles().copyright}>
  <Typography color={'textSecondary'}>© 2021 Code for Romania. Toate drepturile rezervate.</Typography>
</Box>
