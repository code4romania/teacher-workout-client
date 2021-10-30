import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ImageCard from 'home/cards/a-card/img_card.png'

const useStyles = makeStyles({ root: { height: 242, margin: 20 } })
export const Image = () => (
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
    <img src={ImageCard} alt={'image card'} className={useStyles().root} />
  </Grid>
)
