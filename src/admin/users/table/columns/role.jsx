import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

export const Role = ({ item }) => <Material.TableCell>
  {item.role}
</Material.TableCell>

Role.propTypes = { item: PropTypes.object.isRequired }
