import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core'

import * as store from 'startup/store'
import * as theme from 'startup/theme'

export const Providers = ({ children }) => (
  <Provider store={store.make()}>
    <MuiThemeProvider theme={theme.make()}>{children}</MuiThemeProvider>
  </Provider>
)

Providers.propTypes = { children: PropTypes.node.isRequired }
