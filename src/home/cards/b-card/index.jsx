import React from 'react'
import { Box } from '@material-ui/core'

import { About } from 'home/cards/b-card/about'
import { List as CustomList, Button } from 'home/cards/b-card/components'

export const BCard = () => <Box pt={10}>
  <About />
  <CustomList />
  <Button />
</Box>
