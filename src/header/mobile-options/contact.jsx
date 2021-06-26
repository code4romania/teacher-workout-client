import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

import { actions } from 'header/constants'

export const Contact = () => <ListItem button>
  <ListItemText>{actions.contact}</ListItemText>
</ListItem>
