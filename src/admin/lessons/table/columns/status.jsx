import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

export const Status = ({ item }) => <Material.Hidden smDown>
  <Material.TableCell>
    {item.status}
  </Material.TableCell>
</Material.Hidden>

Status.propTypes = { item: PropTypes.object.isRequired }
