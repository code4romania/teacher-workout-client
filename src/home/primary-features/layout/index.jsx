import React from 'react'
import PropTypes from 'prop-types'

import { Paper } from 'home/primary-features/layout/paper'
import { Spacing } from 'home/primary-features/layout/spacing'

export const Layout = ({ children }) => <Spacing>
  <Paper>
    {children}
  </Paper>
</Spacing>

Layout.propTypes = { children: PropTypes.node.isRequired }
