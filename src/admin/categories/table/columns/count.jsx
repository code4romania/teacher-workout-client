import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'

export const Count = ({ item }) => <Material.Hidden smDown>
  <Material.TableCell>
    {item.name}
  </Material.TableCell>
</Material.Hidden>

Count.propTypes = { item: PropTypes.object.isRequired }
