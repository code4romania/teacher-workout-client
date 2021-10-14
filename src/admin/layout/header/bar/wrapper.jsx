import React from 'react'
import PropTypes from 'prop-types'
import { Spacing } from 'layout/common/spacing'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    height: 80,
    background: 'white',
  },
})

const properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80px',
  borderBottom: '1px solid #E5E7EB',
}

export const Wrapper = ({ children }) => <Box className={useStyles().root}>
  <Spacing>
    <Box {...properties}>
      {children}
    </Box>
  </Spacing>
</Box>

Wrapper.propTypes = { children: PropTypes.node.isRequired }
