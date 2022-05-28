import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { InputLabel } from '@mui/material'
import { Layout } from 'core/select/layout'
import { Control } from 'core/select/control'

const useLabelStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(0, -100%)',
    fontSize: '14px',
  },
}));

export const Select = ({ title, options }) => (
  <Layout options={options}>
    <InputLabel classes={useLabelStyles()}>{title}</InputLabel>
    <Control />
  </Layout>
);

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
}

Select.defaultProps = { options: [] }
