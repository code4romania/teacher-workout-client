import React from 'react'
import PropTypes from 'prop-types'

import { Network } from 'network'
import { Settings } from 'settings'

export const Configs = ({ children }) => <Settings>
  <Network>
    {children}
  </Network>
</Settings>

Configs.propTypes = { children: PropTypes.node.isRequired }
