import React from 'react'
import { ListItem, ListItemText } from '@mui/material'

import { actions } from 'layout/header/constants'
import { routesPath } from 'startup/routes'
import { Link } from 'react-router-dom'

export const Lessons = () => <ListItem button component={Link} to={routesPath.Lessons}>
  <ListItemText>{actions.lessons}</ListItemText>
</ListItem>
