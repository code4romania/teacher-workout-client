import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

export const Spacing = ({ children }) => <Box pt={10}>
  {children}
</Box>

Spacing.propTypes = { children: PropTypes.node.isRequired }
