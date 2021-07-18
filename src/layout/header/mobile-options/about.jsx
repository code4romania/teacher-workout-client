import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

import { actions } from 'layout/header/constants'

export const About = () => <ListItem button>
  <ListItemText>{actions.about}</ListItemText>
</ListItem>
