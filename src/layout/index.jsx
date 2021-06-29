import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'

import { Header } from 'header'
import { Footer } from 'footer'

const useStyles = makeStyles({ root: { background: '#E5E5E5' } })

export const Layout = ({ children }) => <Box className={useStyles().root}>
  <Header />
  {children}
  <Footer />
</Box>

Layout.propTypes = { children: PropTypes.node.isRequired }
