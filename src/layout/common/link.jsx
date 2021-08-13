import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

const useStyles = Material.makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    color: 'gray',
    cursor: 'pointer',
  },
}))

export const Link = ({ to, children }) => <Material.Link className={useStyles().root} href={to}>
  {children}
</Material.Link>

Link.propTypes = { to: PropTypes.node.isRequired, children: PropTypes.node.isRequired }
