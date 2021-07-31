import React from 'react'
import { Box } from '@material-ui/core'
import { Title } from 'lessons/top/title'
import { Space } from 'lessons/top/space'
import { Description } from 'lessons/top/description'

export const Top = () => <Box pt={6}>
  <Title />
  <Space />
  <Description />
</Box>
