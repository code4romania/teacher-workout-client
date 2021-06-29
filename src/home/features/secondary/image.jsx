import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'

import Source from 'home/features/secondary/image.svg'

const useStyles = makeStyles(theme => ({
  image: {
    width: 480,

    [theme.breakpoints.between(1, 350)]: { width: 190 },
    [theme.breakpoints.between(350, 500)]: { width: 330 },
  },
}))

export const Image = () => <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
  <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pt={10}>
    <img src={Source} alt={'image'} className={useStyles().image} />
  </Box>
</Grid>
