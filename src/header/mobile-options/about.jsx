import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

import { actions } from 'header/constants'

export const About = () => <ListItem button>
  <ListItemText>{actions.about}</ListItemText>
</ListItem>
