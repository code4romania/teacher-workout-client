import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'

export const Email = ({ item }) => <Material.Hidden smDown>
  <Material.TableCell>
    {item.email}
  </Material.TableCell>
</Material.Hidden>

Email.propTypes = { item: PropTypes.object.isRequired }
