import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import * as Material from '@mui/material'
import * as Styles from '@mui/material/styles'

import * as store from 'startup/store'
import * as theme from 'startup/theme'

export const Providers = ({ children }) => <Provider store={store.make()}>
  <Material.StyledEngineProvider injectFirst>
    <Styles.ThemeProvider theme={theme.make()}>{children}</Styles.ThemeProvider>
  </Material.StyledEngineProvider>
</Provider>

Providers.propTypes = { children: PropTypes.node.isRequired }
