import React from 'react'
import { Box } from '@mui/material'

import { About } from 'home/cards/b-card/about'
import { List as CustomList, Button } from 'home/cards/b-card/components'

export const BCard = () => <Box pt={10}>
  <About />
  <CustomList />
  <Button />
</Box>
