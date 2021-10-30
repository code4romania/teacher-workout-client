import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

export const Spacing = ({ children }) => <Box pt={10}>
  {children}
</Box>

Spacing.propTypes = { children: PropTypes.node.isRequired }
