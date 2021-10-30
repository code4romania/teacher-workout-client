import React from 'react'
import PropTypes from 'prop-types'
import * as Styles from '@mui/styles'
import * as Material from '@mui/material'

const useStyles = Styles.makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    color: 'gray',
    cursor: 'pointer',
    textDecoration: 'none',
  },
}))

export const Link = ({ to, children }) => <Material.Link className={useStyles().root} href={to}>
  {children}
</Material.Link>

Link.propTypes = { to: PropTypes.node.isRequired, children: PropTypes.node.isRequired }
