import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'admin/layout/header'
import { Spacing } from 'layout/common/spacing'

export const Layout = ({ children }) => <>
  <Header />
  <Spacing>
    {children}
  </Spacing>
</>

Layout.propTypes = { children: PropTypes.node.isRequired }

