import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import * as Material from '@mui/material'

const useStyles = makeStyles({ root: { fontFamily: 'Courier', fontSize: '12px' } })

export const Text = ({ children }) => <Material.Typography color={'textSecondary'} className={useStyles().root}>
  {children}
</Material.Typography>

Text.propTypes = { children: PropTypes.node.isRequired }
