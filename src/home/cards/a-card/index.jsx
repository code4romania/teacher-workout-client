import React from 'react'
import { makeStyles } from '@mui/styles'
import { Image } from 'home/cards/a-card/image'
import { Box, Card, Grid } from '@mui/material'
import { Content } from 'home/cards/a-card/content'

const useStyles = makeStyles(theme => ({ card: { padding: theme.spacing(5) } }))

export const ACard = () => <Box pt={10}>
  <Card className={useStyles().card}>
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <Content />
      <Image />
    </Grid>
  </Card>
</Box>
