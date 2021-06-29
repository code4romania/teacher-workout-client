import React from 'react'
import PropTypes from 'prop-types'

import { Paper } from 'home/features/primary/layout/paper'
import { Spacing } from 'home/features/primary/layout/spacing'

export const Layout = ({ children }) => (
  <Spacing>
    <Paper>{children}</Paper>
  </Spacing>
)

Layout.propTypes = { children: PropTypes.node.isRequired }
