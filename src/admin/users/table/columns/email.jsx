import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

export const Email = ({ item }) => <Material.Hidden smDown>
  <Material.TableCell>
    {item.email}
  </Material.TableCell>
</Material.Hidden>

Email.propTypes = { item: PropTypes.object.isRequired }
