import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import ImageCard from 'a-card/img_card.png'

const useStyles = makeStyles({ root: { height: 242, margin: 20 } })
export const Image = () => (
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
    <img src={ImageCard} alt={'image card'} className={useStyles().root} />
  </Grid>
)
