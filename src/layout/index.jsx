import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, makeStyles } from '@material-ui/core'

import { Header } from 'layout/header'
import { Footer } from 'layout/footer'

const useStyles = makeStyles(theme => ({ root: { background: theme.palette.background.main } }))

export const Layout = ({ children }) => <Box className={useStyles().root}>
  <Header />

  <Container>
    {children}
  </Container>
  <Footer />
</Box>

Layout.propTypes = { children: PropTypes.node.isRequired }
