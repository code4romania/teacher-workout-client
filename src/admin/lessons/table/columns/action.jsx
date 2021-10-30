import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

const useStyles = Material.makeStyles(theme => ({
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
