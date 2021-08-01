import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  link: {
    maxHeight: '35px',
    [theme.breakpoints.up('md')]: { maxHeight: '49px' },
  },
}))

export const Image = ({ src }) => <img src={src} alt={''} className={useStyles().link} />

Image.propTypes = { src: PropTypes.node.isRequired }
