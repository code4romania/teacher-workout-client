import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

import { actions } from 'layout/header/constants'

export const Lessons = () => <ListItem button>
  <ListItemText>{actions.lessons}</ListItemText>
</ListItem>
