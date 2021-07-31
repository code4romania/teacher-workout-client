import React from 'react'
import PropTypes from 'prop-types'

import { Link as MuiLink, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    fontWeight: '700',
    color: 'gray',
    cursor: 'pointer',
  },
})

export const Link = ({to, children }) => <MuiLink className={useStyles().root} href={to}>
  {children}
</MuiLink>

Link.propTypes = { children: PropTypes.node.isRequired }
