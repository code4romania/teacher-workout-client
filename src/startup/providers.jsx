import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

import * as store from 'startup/store'

export const Providers = ({ children }) => <Provider store={store.make()}>
  <MuiThemeProvider theme={createMuiTheme()}>
    {children}
  </MuiThemeProvider>
</Provider>

Providers.propTypes = { children: PropTypes.node.isRequired }
