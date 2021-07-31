import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

import { actions } from 'layout/header/constants'
import { Link } from 'react-router-dom'
import { routesPath } from 'startup/routes'

export const Contact = () => <ListItem button component={Link} to={routesPath.Contact}>
  <ListItemText>{actions.contact}</ListItemText>
</ListItem>
