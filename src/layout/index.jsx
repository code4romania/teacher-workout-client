import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { Header } from 'layout/header'
import { Footer } from 'layout/footer'
import { makeStyles } from '@mui/styles'
import { Spacing } from 'layout/common/spacing'

const useStyles = makeStyles(theme => ({ root: { background: theme.palette.background.main } }))

export const Layout = ({ children }) => (
  <Box className={useStyles().root}>
    <Header />

    <Spacing>
      {children}
      <Footer />
    </Spacing>
  </Box>
)

Layout.propTypes = { children: PropTypes.node.isRequired }
