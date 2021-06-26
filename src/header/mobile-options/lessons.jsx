import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

import { actions } from 'header/constants'

export const Lessons = () => <ListItem button>
  <ListItemText>{actions.lessons}</ListItemText>
</ListItem>
