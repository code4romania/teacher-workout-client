import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Grid } from '@mui/material'

import Source from 'home/features/secondary/image.svg'

const useStyles = makeStyles(() => ({ image: { width: '100%' } }))

export const Image = () => <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
  <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pt={10}>
    <img src={Source} alt={'image'} className={useStyles().image} />
  </Box>
</Grid>
