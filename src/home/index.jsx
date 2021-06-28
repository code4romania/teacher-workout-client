import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import { Header } from 'header'
import { Footer } from 'footer'
import { Hero } from 'home/hero'
import { Cards } from 'home/cards'
import { PrimaryFeatures } from 'home/primary-features'
import { SecondaryFeatures } from 'home/secondary-features'

const useStyles = makeStyles({ root: { background: '#E5E5E5' } })

export const Home = () => <Box className={useStyles().root}>
  <Header />
  <Hero />
  <PrimaryFeatures />
  <SecondaryFeatures />
  <Cards />
  <Footer />
</Box>
