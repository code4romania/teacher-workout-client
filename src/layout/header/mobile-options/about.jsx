import React from 'react'
import { ListItem, ListItemText } from '@mui/material'

import { actions } from 'layout/header/constants'
import { Link } from 'react-router-dom'
import { routesPath } from 'startup/routes'

export const About = () => <ListItem button component={Link} to={routesPath.About}>
  <ListItemText>{actions.about}</ListItemText>
</ListItem>
