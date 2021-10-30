import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { ChevronRight } from '@mui/icons-material'
import { ListItem as MUIListItem, ListItemIcon, ListItemText } from '@mui/material'

const useListStyles = makeStyles(() => ({ noPaddingLeft: { paddingLeft: 0 } }))

const useTextStyles = makeStyles(() => ({
  primary: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 1.75,
    marginRight: 5,
  },
  secondary: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 1.25,
    marginRight: 5,
  },
}))

export const ListItem = props => (
  <MUIListItem button className={useListStyles().noPaddingLeft}>
    <ListItemIcon>
      <img src={props.content.icon} style={{ height: 90, marginRight: 20 }} alt={'Image'} />
    </ListItemIcon>
    <ListItemText primary={props.content.title} secondary={props.content.description} classes={useTextStyles()} />
    <ChevronRight />
  </MUIListItem>
)

ListItem.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
}
