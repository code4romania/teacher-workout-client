import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

const useStyles = Material.makeStyles({ root: { fontFamily: 'Courier', fontSize: '12px' } })

export const Text = ({ children }) => <Material.Typography color={'textSecondary'} className={useStyles().root}>
  {children}
</Material.Typography>

Text.propTypes = { children: PropTypes.node.isRequired }
