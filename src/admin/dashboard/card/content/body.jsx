import React from 'react'
import * as Material from '@material-ui/core'
import { Title } from 'admin/dashboard/card/content/title'
import { Statistics } from 'admin/dashboard/card/content/statistics'

export const Body = () => <Material.Box pl={2}>
  <Title />
  <Statistics />
</Material.Box>
