import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

export const FullName = ({ item }) => <Material.TableCell>
  {item.fullName}
</Material.TableCell>

FullName.propTypes = { item: PropTypes.object.isRequired }
