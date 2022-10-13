import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import * as Material from '@mui/material'

const useStyles = makeStyles(theme => ({
  box: {
    display: 'inline',
    [theme.breakpoints.down('sm')]: { display: 'block' },
  },
}))

export const Action = ({ children }) => <Material.Link href={'#'}>
  <Material.Box px={1} className={useStyles().box}>
    {children}
  </Material.Box>
</Material.Link>

Action.propTypes = { children: PropTypes.node.isRequired }
