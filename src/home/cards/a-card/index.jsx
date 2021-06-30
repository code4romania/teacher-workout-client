import React from 'react'
import { Box, Card, Grid, makeStyles } from '@material-ui/core'
import { Content } from 'home/cards/a-card/content'
import { Image } from 'home/cards/a-card/image'

const useStyles = makeStyles(theme => ({ card: { padding: theme.spacing(5) } }))

export const ACard = () => <Box pt={10}>
  <Card className={useStyles().card}>
    <Grid container justify={'center'} alignItems={'center'}>
      <Content />
      <Image />
    </Grid>
  </Card>
</Box>
