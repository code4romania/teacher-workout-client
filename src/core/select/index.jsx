import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'core/select/layout'
import { Control } from 'core/select/control'
import * as Material from '@material-ui/core'

export const Select = ({ title, options }) => <Layout options={options}>
  <Material.InputLabel>{title}</Material.InputLabel>
  <Control />
</Layout>

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
}

Select.defaultProps = { options: [] }
