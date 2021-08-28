import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

export const Phone = ({ item }) => <Material.TableCell>
  {item.phone}
</Material.TableCell>

Phone.propTypes = { item: PropTypes.object.isRequired }
