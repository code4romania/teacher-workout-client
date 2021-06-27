import { Cards } from 'home/cards'
import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import { Header } from 'header'
import { Hero } from 'home/hero'
import { PrimaryFeatures } from 'home/primary-features'

const useStyles = makeStyles({ root: { background: '#E5E5E5' } })

export const Home = () => (
  <Box className={useStyles().root}>
    <Header />
    <Hero />
    <PrimaryFeatures />
    <Cards />
  </Box>
)
