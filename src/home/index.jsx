import React from 'react'

import { Layout } from 'layout'
import { Hero } from 'home/hero'
import { Cards } from 'home/cards'
import { Features } from 'home/features'

export const Home = () => <Layout>
  <Hero />
  <Features />
  <Cards />
</Layout>
