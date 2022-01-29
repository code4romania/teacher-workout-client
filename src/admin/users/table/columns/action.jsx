import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'

export const Action = ({ item }) => <Material.TableCell>
  <Material.Link href={`/admin/users/edit/${item.id}`}>
    Edit...
  </Material.Link>
</Material.TableCell>

Action.propTypes = { item: PropTypes.shape({ id: PropTypes.string }).isRequired }
