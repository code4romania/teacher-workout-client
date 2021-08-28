import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

export const Count = ({ item }) => <Material.TableCell>
  {item.name}
</Material.TableCell>

Count.propTypes = { item: PropTypes.object.isRequired }
