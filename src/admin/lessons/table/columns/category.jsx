import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

export const Category = ({ item }) => <Material.Hidden mdDown>
  <Material.TableCell>
    {item.category}
  </Material.TableCell>
</Material.Hidden>

Category.propTypes = { item: PropTypes.object.isRequired }
