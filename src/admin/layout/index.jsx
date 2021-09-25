import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'admin/layout/header'
import { Spacing } from 'layout/common/spacing'
import { Background } from 'admin/layout/background'

export const Layout = ({ children }) => <>
  <Background />
  <Header />
  <Spacing>
    {children}
  </Spacing>
</>

Layout.propTypes = { children: PropTypes.node.isRequired }

