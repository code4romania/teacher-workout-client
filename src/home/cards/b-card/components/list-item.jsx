import React from 'react'
import PropTypes from 'prop-types'
import { ListItem as MUIListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ChevronRight } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
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
  noPaddingLeft: { paddingLeft: 0 },
}))

export const ListItem = props => {
  const classes = useStyles()
  const { title, description, icon } = props?.content

  return (
    <MUIListItem button className={classes.noPaddingLeft}>
      <ListItemIcon>
        <img src={icon} style={{ height: 90, marginRight: 20 }} alt={'Image'} />
      </ListItemIcon>
      <ListItemText primary={title} secondary={description} classes={classes} />
      <ChevronRight />
    </MUIListItem>
  )
}

ListItem.propTypes = {
  content: PropTypes.exact({
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.element,
  }).isRequired,
}
