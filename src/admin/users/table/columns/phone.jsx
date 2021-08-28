import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

export const Phone = ({ item }) => <Material.Hidden smDown>
  <Material.TableCell>
    {item.phone}
  </Material.TableCell>
</Material.Hidden>

Phone.propTypes = { item: PropTypes.object.isRequired }
